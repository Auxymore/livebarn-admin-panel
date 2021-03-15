import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from '../../reducer/AppReducer';

export const DataContext = createContext();

const initialState = {
  tableData: [],
  selectedRowKey: null,
  selectedRowData: {},
  typedData: "",
  filteredData: [],
  selectedTab: "1",
  refreshData: 3000,
  isUpdate: false,
  serverData: [],
  visible: false,
}

const DataContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)
  const {tableData, 
         selectedRowKey, 
         selectedRowData, 
         typedData, 
         filteredData, 
         selectedTab, 
         refreshData, 
         isUpdate, 
         serverData, 
         visible} = state


    const url = "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project"

// FETCH DATA SECTION

    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json()
      dispatch({
        type: "SET_TABLE_DATA",
        payload: data
    });
      dispatch({
        type: "SET_UPDATE",
        payload: !isUpdate
    });
      
     } 
  
   useEffect(() => {
     if(tableData.length === 0){
       getData();
     } else if(refreshData && refreshData > 0) {
      const interval = setTimeout(getData, refreshData)
      return () => {
       clearTimeout(interval)
      }        
    }
   }, [isUpdate]);

  // GET TAB KEY SECTION AND RENDER SELECTING DATA (SURFACES OR SERVERS)

    const callBack = activeKey => {
      if(activeKey){
        dispatch({
          type: "SET_SELECTED_TAB",
          payload: activeKey
        });
        return activeKey
      }else{
        dispatch({
          type: "SET_SELECTED_TAB",
          payload: activeKey
        });
        return selectedTab
      }    
    }

    const getRowKey = record => {
      if(record) {
        return `${record.id}`;
      }else {
        return null
      }  
      };
      
    const setRowKey = (record) => {
        dispatch({
          type: "SET_SELECTED_ROW_KEY",
          payload: getRowKey(record)
        });
        dispatch({
          type: "SET_VISIBLE",
          payload: false
        });

        if(selectedTab !== "2"){

          dispatch({
            type: "SET_SELECTED_ROW_DATA",
            payload: record
          });
        }else{
          dispatch({
            type: "SET_SELECTED_ROW_DATA",
            payload: selectedRowData
          });
          // FILTER SURFACE BASED ON SERVER
          if(selectedRowKey){
            dispatch({
              type: "SET_SERVER_DATA",
              payload: tableData.filter(servers => servers.server.id === selectedRowData.server.id )
            });
            showServer();
            dispatch({
              type: "SET_VISIBLE",
              payload: !visible
            })

          } 
          
        }     
      };

      // LIVE SEARCH SECTION

    const handleSearch = (e) => {
      const searchQuery = e.target.value.toLowerCase();
      dispatch({
        type: "SET_TYPED_DATA",
        payload: searchQuery
      });
      const displayData = tableData.filter(data => {
        const searchValue = data.venueName.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
      })
      dispatch({
        type: "SET_FILTERED_DATA",
        payload: displayData
      });
    };

    // DISPLAY LIST OF SURFACE WITH THE SAME SERVER SECTION

    const showServer = () => {
        dispatch({
          type: "SET_VISIBLE",
          payload: !visible
        });
    }
    return (
        <DataContext.Provider value={{tableData, getRowKey, setRowKey, selectedRowKey, selectedRowData, handleSearch, typedData, filteredData, callBack, serverData, showServer, visible, selectedTab}}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider
