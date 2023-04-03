import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import data from "./mock-data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import Select from 'react-select';
import selectStates from './selectStates.json';
import selectProducts from './selectProducts.json';
import Paper from '@mui/material/Paper';
import { EditingState } from "@devexpress/dx-react-grid";
import { GridExporter } from '@devexpress/dx-react-grid-export';
import { Grid, VirtualTable, TableColumnResizing, TableHeaderRow, TableEditColumn, Toolbar, ExportPanel } from '@devexpress/dx-react-grid-material-ui';
import tablegen from "./tablegen.json";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import prodCheck from "./products/productCol";
import removeCheck from "./products/removeproductCol";
import { saveAs } from 'file-saver-es';




/* TO DO
  Make the add new product match an existing data point to fill in the remainder of the data
*/

// to do: add a columns useState like the below and in handleAddRowSubmit, create logic to setColumns to existing/added products
const App = ({ signOut }) => {
  const columns = [
    { name: 'state', title: 'State' },
    { name: 'product', title: 'Product' },
    { name: 'facepage', title: 'Face Page' },
    { name: 'masterapp', title: 'Master Application' },
    { name: 'tableofcontents', title: 'Table of Contents' },
    { name: 'scheduleofbene', title: 'Schedule of Benefits' },
    { name: 'definitions', title: 'Definitions' },
    { name: 'premiums', title: 'Premiums' },
  ];
  const onSaved = (workbook) => {
    console.log(workbook)
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
    });
  };

  const [columnHeads, setColumnHeads] = useState(columns)

  const [products, setProducts] = useState(data);

  const [addRowData, setAddRowData] = useState({
    id: '',
    state: '',
    product: ''
  });

  const stateHandleAddRowFormChange = (option) => {
    const fieldValue = option.value;
    const newFormData = {...addRowData};
    newFormData["state"] = fieldValue;
    setAddRowData(newFormData); 
  }
  const productHandleAddRowFormChange = (option) => {
    const fieldValue = option.value;
    const newFormData = {...addRowData};
    newFormData["product"] = fieldValue;
    setAddRowData(newFormData); 
  }

  const handleAddRowSubmit = (event) => {
    event.preventDefault();
    
    const newRow = {
      id: nanoid(),
      state: addRowData.state,
      product: addRowData.product  
    };
    // add a check if this is the first of this product type to be added so we can add headers
     if (!products.find(prod=>prod.product === newRow.product)) {
      const otherColumnHeads = prodCheck(columnHeads, newRow.product)
      const newColumnHeads = [...columnHeads, ...otherColumnHeads]
      newColumnHeads.sort((a,b)=>{
        return a.sortingIndex - b.sortingIndex;
      })
      setColumnHeads(newColumnHeads)
    }
    const newRows = [...products, newRow];
    //remove the example as soon as we add the first product
    if (newRows[0].id === 1) {
      newRows.splice(0,1)
    }
    setProducts(newRows)
    columnHeads.sort((a,b)=>{
      return a.sortingIndex - b.sortingIndex;
    })
  }

  const commitChanges = ({ deleted }) => {
    const deletedObj = products.find((product)=> product.id === deleted[0])
    const newRows = [...products];
    const index = products.findIndex((product)=> product.id === deleted[0])
    newRows.splice(index,1);
    setProducts(newRows);
    // add a check if this is the last product to be removed so we can remove headers
    if (!newRows.find(prod=>prod.product === deletedObj.product)) {
      const remColHeads = removeCheck(columnHeads, newRows, deletedObj)
      remColHeads.sort((a,b)=> {
        return a.sortingIndex - b.sortingIndex;
      })
      setColumnHeads(remColHeads)
    }
  }

  const customStyles = {
    control: styles => ({ ...styles,                 

    }),
    option: styles => ({ ...styles,                 

    }),
    menu: styles => ({ ...styles,                 
     width: 'max-content',
     minWidth: '100%' 
    })                 

  };

const [defaultColumnWidths] = useState(tablegen);

const exporterRef = useRef(null);

const startExport = useCallback(() => {
  exporterRef.current.exportGrid();
}, [exporterRef]);

// TO - DO
//add expandable rows https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/editing-in-detail-row/#handle-the-detail-row-expand-and-collapse-events
// fix form dropdowns to not disappear table or figure out new selection


const getRowId = row => row.id;

  return (
    <View className="App">
      <Heading level={1}>Product Manual</Heading>
      <div className="spacer-small"></div>
      <div className="app-container">
        <div className="spacer-small"></div>
        <h2>Product Table</h2>
      </div>
      <div className="spacer"></div>
      <Paper style={{height: 'auto'}}>
      <Grid className="tablegrid"         
        rows={products}
        columns={columnHeads}
        getRowId={getRowId}
      >
        <VirtualTable />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths} resizingMode="widget"/>
        <EditingState
          onCommitChanges={commitChanges}
        />
        <TableHeaderRow />
        <TableEditColumn
          showDeleteCommand
        />
        <Toolbar />
        <ExportPanel startExport={startExport} />
      </Grid>
      <GridExporter
        ref={exporterRef}
        rows={products}
        columns={columnHeads}
        onSave={onSaved}
      />
    </Paper>
    <div className="spacer-small"></div>
      <h2>Add New Product Row</h2>
        <form className="selectforms">
          <div className="react-select-container-div">
            <Select options={selectStates}
              className="react-select-container"
              classNamePrefix="react-select"
              onChange={stateHandleAddRowFormChange}
              styles={customStyles} 
            />
            <Select options={selectProducts}
              className="react-select-container"
              classNamePrefix="react-select" 
              onChange={productHandleAddRowFormChange}
              styles={customStyles}
            />
          </div>
          <button type="submit" class="btn btn-success" onClick={handleAddRowSubmit}>+</button>
        </form>
      <div className="spacer"></div>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);