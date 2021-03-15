const AppReducer = (state, action) => {
    switch(action.type){
        case "SET_TABLE_DATA":
            return {
                ...state,
                tableData: action.payload
            }
        case "SET_SELECTED_ROW_KEY":
            return {
                ...state,
                selectedRowKey: action.payload
            }
        case "SET_SELECTED_ROW_DATA":
            return {
                ...state,
                selectedRowData: action.payload
            }
        case "SET_TYPED_DATA":
            return {
                ...state,
                typedData: action.payload
            }
        case "SET_FILTERED_DATA":
            return {
                ...state,
                filteredData: action.payload
            }
        case "SET_SELECTED_TAB":
            return {
                ...state,
                selectedTab: action.payload
            }
        case "SET_REFRESH_DATA":
            return {
                ...state,
                refreshData: action.payload
            }
        case "SET_UPDATE":
            return {
                ...state,
                isUpdate: action.payload
            }
        case "SET_SERVER_DATA":
            return {
                ...state,
                serverData: action.payload
            }
        case "SET_VISIBLE":
            return {
                ...state,
                visible: action.payload
            }
        default:
            return state
    }   
}

export default AppReducer