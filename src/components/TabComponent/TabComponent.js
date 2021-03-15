import React from 'react'
import { Tabs } from 'antd';
import EmptyComponent from '../EmptyComponent';
import DataComponent from '../DataComponent/DataComponent';
import 'antd/dist/antd.css';
import "./TabComponent.css";

const TabComponent = () => {
    
    return (
        
          <Tabs className="tab-container" tabPosition="left" defaultActiveKey="2">
              <Tabs.TabPane tab="Empty Data" key="1">
                  <EmptyComponent />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Data" key="2">
                  <DataComponent />
              </Tabs.TabPane>
          </Tabs>
        
    )
}

export default TabComponent
