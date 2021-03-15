import React, { useContext } from 'react'
import { DataContext } from '../assets/shared/data';
import ContentComponent from './ContentComponent/ContentComponent';

const SurfacesComponent = () => {

  const {tableData, filteredData} = useContext(DataContext)
  console.log(tableData)
  console.log(filteredData)
   
  const columns = [
    {
      title: 'Venue Name',
      dataIndex: 'venueName', 
      render: text => <span>{text}</span>,
      width: 500,
    },
    {
      title: 'Surface Name',
      dataIndex: 'surfaceName',  
    },
    {
        title: 'Sport',
        dataIndex: 'sport', 
      },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 100
    },
  ];
    return (
        <div>
            <ContentComponent dataSource={tableData} columns={columns}></ContentComponent>
            <div style={{padding: 10, display: "block"}}>Matches: {filteredData.length === 0 ? tableData.length : filteredData.length}</div>
        </div>
    )
}

export default SurfacesComponent
