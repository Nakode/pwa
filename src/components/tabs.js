import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import PageOne from './pageOne';
import PageTwo from './pageTwo';
import PageThree from './pageThree';
import PageFour from './pageFour';

const Index = () => (
  <Tabs style={{height:'100vh'}}>
   
    <TabPanel style={{height:'90vh'}}>
      <PageOne/>
    </TabPanel>

    <TabPanel style={{height:'90vh'}}>
      <PageTwo/>
    </TabPanel>

    <TabPanel style={{height:'90vh'}}>
      <PageThree/>
    </TabPanel>

    <TabPanel style={{height:'90vh'}}>
      <PageFour/>
    </TabPanel>


    <TabList style={{
      height:'10vh', border: '1px solid white', position:'absolute', bottom: 0, 
      left:0 , right:0, margin: 0, display:'flex', justifyContent:'space-evenly', 
      backgroundColor:'white',
      alignItems:'center'}}>
      <Tab style={{border:'1px solid white', borderRadius: 0, color:'black'}}>Home</Tab>
      <Tab style={{border:'1px solid white', borderRadius: 0, color:'black'}}>Inbox</Tab>
      <Tab style={{border:'1px solid white', borderRadius: 0, color:'black'}}>Chat</Tab>
      <Tab style={{border:'1px solid white', borderRadius: 0, color:'black'}}>Settings</Tab>
    </TabList>

  </Tabs>
);


export default Index;