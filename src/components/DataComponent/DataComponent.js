import React, { useContext } from 'react';
import { Tabs, Input } from 'antd';
import SurfacesComponent from '../SurfacesComponent';
import ServersComponent from '../ServerComponent/ServersComponent';
import { DataContext } from '../../assets/shared/data';
import DescriptionComponent from '../DescriptionComponent/DescriptionComponent';
import "./DataComponent.css"

const { TabPane } = Tabs;

const DataComponent = () => {
  const {typedData, handleSearch, callBack} = useContext(DataContext);

    return (
      <>
      <div>
         <Input type="text" placeholder="search" value={typedData} onChange={handleSearch} style={{ width: "75%", left: "-13%", marginLeft: 10}} />
      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
         <div style={{width: "75%"}}>
         <Tabs className="tab-container" defaultActiveKey="1" onTabClick={callBack} >
           <TabPane tab="Surfaces" key="1" >
             <SurfacesComponent />
           </TabPane>
           <TabPane tab="Servers" key="2">
             <ServersComponent />
           </TabPane>
         </Tabs>
         </div>
         <div >
           <DescriptionComponent />
         </div>
       </div>
       </>

    )
}

export default DataComponent
