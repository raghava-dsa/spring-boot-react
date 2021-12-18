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
import { setMainGrid } from './actions/application-actions';
import MainGrid from './main-grid';

function App() {

  const [state, dispatch] = useReducer(appStateReducer, initialState);

  const rowData = [
    {
      ccNumber: "12345", desc: "Celica", ti: 35000,
      skus: [
        {
          skuId: "12345678",
          sizeProfile: "0.5",
          ti: 11
        },
        {
          skuId: "12345679",
          sizeProfile: "0.5",
          ti: 15
        }
      ]

    },
    {
      ccNumber: "67890", desc: "Mondeo", ti: 32000,
      skus: [
        {
          skuId: "5678911",
          sizeProfile: "0.5",
          ti: 11
        },
        {
          skuId: "5678912",
          sizeProfile: "0.5",
          ti: 15
        }
      ]

    },
    {
      ccNumber: "111213", desc: "Boxter", ti: 72000,
      skus: [
        {
          skuId: "7891341",
          sizeProfile: "0.5",
          ti: 11
        },
        {
          skuId: "7891342",
          sizeProfile: "0.5",
          ti: 15
        },
        {
          skuId: "7891343",
          sizeProfile: "0.5",
          ti: 15
        }
      ]
    }
  ];

  React.useEffect(() => {
    console.warn("==load==");
    fetch(
      "http://localhost:8081/api/getNewStores")
      .then((res) => res.json())
      .then((json) => {
        dispatch(setMainGrid(json));
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
