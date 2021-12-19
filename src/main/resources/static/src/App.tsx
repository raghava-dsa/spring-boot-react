import React, { useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { appStateReducer } from '../src/reducers/application-reducers';

import {
  ApplicationContext,
  IAppState,
  initialState,
  Store,
} from '../src/context/application-context';
import { setMainGrid, setMainGridTIandInv } from './actions/application-actions';
import MainGrid from './main-grid';

function App() {

  const [state, dispatch] = useReducer(appStateReducer, initialState);



  React.useEffect(() => {
    console.warn("==load==");
    fetch(
      "http://localhost:8081/api/getNewStores")
      .then((res) => res.json())
      .then((json) => {
        dispatch(setMainGrid(json));

        console.warn(json);
        json.forEach(element => {
          console.warn(element.ccNumber);
          fetch(
            "http://localhost:8081/api/getNewStoresTIAndCommInv",
            {
              method: 'POST',
              headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
              },
              body: JSON.stringify({ ccs: [element.ccNumber] })
            }
          ).then((res) => res.json())
            .then((json1) => {
              dispatch(setMainGridTIandInv(json1));
            });

        });


      });
    // dispatch(setMainGrid(rowData));

  }, []);



  return (
    <ApplicationContext.Provider
      value={{
        state,
        dispatch,
      }}
    >

      <MainGrid />
    </ApplicationContext.Provider>
  );

}

export default App;
