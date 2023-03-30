import React, { useState } from "react";
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
import { Grid, VirtualTable, TableHeaderRow, TableEditColumn } from '@devexpress/dx-react-grid-material-ui';
import tablegen from "./tablegen.json";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

/* TO DO
  Make the add new product match an existing data point to fill in the remainder of the data
*/


const App = ({ signOut }) => {


  const [products, setProducts] = useState(data);

  const [addRowData, setAddRowData] = useState({
    id: '',
    state: '',
    product: '',
    facepage: '',
    premiums: ''
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

    const newRows = [...products, newRow];
    setProducts(newRows)
  }

  const commitChanges = ({ deleted }) => {
    const newRows = [...products];
    const index = products.findIndex((product)=> product.id === deleted[0])
    newRows.splice(index,1);
    setProducts(newRows);
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

  const [tableColumnExtensions] = useState(tablegen);

  const columns = [
    { name: 'state', title: 'State' },
    { name: 'product', title: 'Product' },
    { name: 'facepage', title: 'Face Page' },
    { name: 'masterapp', title: 'Master Application' },
    { name: 'tableofcontents', title: 'Table of Contents' },
    { name: 'scheduleofbene', title: 'Schedule of Benefits' },
    { name: 'definitions', title: 'Definitions' },
    { name: 'premiums', title: 'Premiums' },
    { name: 'dummycol1', title: 'Dummy Column 1' },
    { name: 'dummycol2', title: 'Dummy Column 2' },
    { name: 'dummycol3', title: 'Dummy Column 3' },
    { name: 'dummycol4', title: 'Dummy Column 4' },
    { name: 'dummycol5', title: 'Dummy Column 5' },
    { name: 'dummycol6', title: 'Dummy Column 6' },
    { name: 'dummycol7', title: 'Dummy Column 7' },
  ];

//add expandable rows https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/editing-in-detail-row/#handle-the-detail-row-expand-and-collapse-events
  
const getRowId = row => row.id;

  return (
    <View className="App">
      <Heading level={1}>Product Manual</Heading>
      <div className="spacer-small"></div>
      <div className="app-container">
        <h2>Product Table</h2>
      </div>
      <div className="spacer"></div>
      <Paper style={{height: '700px'}}>
      <Grid
        rows={products}
        columns={columns}
        getRowId={getRowId}
      >
        <VirtualTable 
        columnExtensions={tableColumnExtensions}
        />
        <EditingState
          onCommitChanges={commitChanges}
        />
        <TableHeaderRow />
        <TableEditColumn
          showDeleteCommand
        />
      </Grid>
    </Paper>
      <div className="spacer"></div>
      <h2>Add New Product Row</h2>
        <form>
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