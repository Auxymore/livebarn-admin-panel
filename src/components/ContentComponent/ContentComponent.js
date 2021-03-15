import React, { useContext } from 'react'
import { Table } from 'antd';
import { DataContext } from '../../assets/shared/data';
import "./ContentComponent.css";
import 'antd/dist/antd.css';

const ContentComponent = ({dataSource, columns}) => {
    const {getRowKey, setRowKey, typedData, filteredData, selectedTab} = useContext(DataContext)

    return (
        <div>
           <Table 
            className="hover-highlight"
            rowKey={record => getRowKey(record)} 
            onRow={record => {
              return {
                onClick: () => {
                  setRowKey(record);
                }
              }
            }}
            bodyStyle={{fontSize: "bold" }}
            scroll={{ y: 600 }}

            pagination={false} 
            dataSource={typedData && selectedTab === "1" ? filteredData : dataSource}  
            columns={columns}>
            </Table>            
        </div>
    )
}

export default ContentComponent
