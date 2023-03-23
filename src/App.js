import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import data from "./mock-data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import Select from 'react-select';
import selectStates from './selectStates.json';
import selectProducts from './selectProducts.json';


{/* TO DO
  Make the add new product match an existing data point to fill in the remainder of the data
*/}


const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  const [products, setProducts] = useState(data);

  const [productRows, setProductRows] = useState({
    state: '',
    product: '',
    facepage: '',
    premiums: ''
  })

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

  const handleDelete = (rowID) => {
    const newRows = [...products];
    const index = products.findIndex((product)=> product.id === rowID)

    newRows.splice(index, 1);

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

  return (
    <View className="App">
      <Heading level={1}>Product Manual</Heading>

      <div className="app-container">
        <table>
          <thead>
            <tr>
            <th> </th>
            <th>State</th>
            <th>Product</th>
            <th>Face Page</th>
            <th>Premiums</th>
            </tr>
          </thead>
          <tbody>
              {products.map((product)=> 
              <tr>
                <td><button type="button" class="btn btn-danger" onClick={()=> handleDelete(product.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </button></td>
                <td> { product.state }</td>
                <td> { product.product } </td>
                <td> { product.facepage }</td>
                <td> { product.premiums } </td>
              </tr>
              )}
          </tbody>
        </table>
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
      </div>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);