import { DetailGridInfo, GridApi, GridOptions } from "ag-grid-community";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import React from "react";
import { FunctionComponent, useContext, useRef, useEffect } from "react";
import { ApplicationContext } from "./context/application-context";



const MainGrid: FunctionComponent<any> = () => {
    const { state: state, dispatch: appDispatch } = useContext(ApplicationContext);

    const grid = useRef(null);

  useEffect(() => {
    /**
    * It executes only when status header checkbox is updated
    * 
    * 
    */
    grid.current?.api.setRowData(state.stores);
   // grid.current.api.refreshCells();
   // grid.current.api.refreshHeader();
 },[state])


  const myColDefs = [
    { headerName: 'ccNumber1111', field: 'ccNumber', cellRenderer: 'agGroupCellRenderer', },
    { headerName: 'desc', field: 'desc', type: 'rightAligned' },
    { headerName: 'ti', field: 'ti', type: 'rightAligned'  },
    { headerName: 'commInv', field: 'commInv',type: 'rightAligned'  },
  ];

    const gridOptions : GridOptions = {
        // PROPERTIES
        // Objects like myRowData and myColDefs would be created in your application
        columnDefs: myColDefs,
        pagination: true,
        rowSelection: 'single',
        masterDetail: true,
    
        // provide Detail Cell Renderer Params
        detailCellRendererParams: {
          // provide the Grid Options to use on the Detail Grid
          detailGridOptions: {
            columnDefs: [
              { field: 'skuId' },
              { field: 'sizeProfile' },
              { field: 'ti' },
              { field: 'commInv' }
            ]
          },
          // get the rows for each Detail Grid
          getDetailRowData: (params: { successCallback: (arg0: any) => void; data: { skus: any; }; }) => {
            params.successCallback(params.data.skus);
          }
        },
    
        // EVENTS
        // Add event handlers
        onRowClicked: (event: any) => console.log('A row was clicked'),
        onColumnResized: (event: any) => console.log('A column was resized'),
        onGridReady: (event: any) => console.log('The grid is now ready'),
    
      }
    

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 6000 }}>
            <AgGridReact
                gridOptions={gridOptions} ref={grid}>
            </AgGridReact>
        </div>
    );

};

export default MainGrid;