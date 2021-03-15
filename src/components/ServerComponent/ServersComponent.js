import React, { useContext } from 'react'
import { DataContext } from '../../assets/shared/data';
import ContentComponent from '../ContentComponent/ContentComponent';
import { Table, Collapse, Space } from 'antd';
import "./ServerComponent.css"


const ServersComponent = () => {

  const {selectedRowData, serverData, showServer, visible, getRowKey, setRowKey,} = useContext(DataContext);

  const tableData = [];
  tableData.push(selectedRowData)
  const formatedData = tableData.map(item=> item.server)

    const columns = [
        {
          title: "Ip4",
          dataIndex: 'ip4', 
        },
        {
          title: 'Dns',
          dataIndex: 'dns',  
        },
      ];

      const serverColums = [
        {
          title: "Venue",
          dataIndex: "venueName"
        },
        {
          title: "Surface",
          dataIndex: "surfaceName"
        },
        {
          title: "Sport",
          dataIndex: "sport"
        }
      ]

    return (
        <div>
        <ContentComponent dataSource={formatedData} columns={columns}></ContentComponent>
        <Space />
        <Space />
        {(visible) &&(
          <div style={{padding: 20, textAlign: "left", background:"#d9d9d9"}}>
          <Collapse onChange={showServer} ghost>
            <div>
              <h2>Total Surfaces: {serverData.length}</h2>
            </div>
            <div style={{padding: 20}}>
              <Table className="server-table-container" dataSource={serverData} columns={serverColums} pagination={false} scroll={{ y: 300 }} rowKey={record => getRowKey(record)}  onRow={record => {
              return {
                onClick: () => {
                  setRowKey(record);
                }
              }
            }}>
              </Table>
              </div>   
          </Collapse>
          </div>
        )
        }
        </div>
    )
}

export default ServersComponent
