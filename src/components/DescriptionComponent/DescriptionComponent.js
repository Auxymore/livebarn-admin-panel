import React, { useContext } from 'react';
import { Descriptions } from 'antd';
import { DataContext } from '../../assets/shared/data';
import 'antd/dist/antd.css';
import "./DescriptionComponent.css";

const DescriptionComponent = () => {

  const {selectedRowData} = useContext(DataContext)
  const {server} = selectedRowData

    return (
        <div style={{padding: 10}}>
        <Descriptions className="description-container" title="Details" layout="vertical" style={{ width: 300}} size="small" column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
          <Descriptions.Item label="Venue Name">{selectedRowData.venueName}</Descriptions.Item>
          <Descriptions.Item label="Surface Name">{selectedRowData.surfaceName}</Descriptions.Item>
          <Descriptions.Item label="Status">{selectedRowData.status}</Descriptions.Item>
          <Descriptions.Item label="Sport">{selectedRowData.sport}</Descriptions.Item>
          <Descriptions.Item label="Server Ip">{typeof server == "undefined" ? "..." : server.ip4}</Descriptions.Item> 
        </Descriptions>
        </div>
    );
}

export default DescriptionComponent
