import React from 'react';
import DataContextProvider from '../assets/shared/data';
import TabComponent from './TabComponent/TabComponent';


const DashboardComponent = () => {
    return (
        <div>
        <DataContextProvider>
          <TabComponent />
        </DataContextProvider>      
        </div>
    )
}

export default DashboardComponent
