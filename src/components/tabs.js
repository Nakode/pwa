import React, {Suspense} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const LazyPageOne = React.lazy(() => import('./pageOne'));
const LazyPageTwo = React.lazy(() => import('./pageTwo'));
const LazyPageThree = React.lazy(() => import('./pageThree'));
const LazyPageFour = React.lazy(() => import('./pageFour'));


const Index = () => (
  <Tabs style={{height:'100vh'}}>
   
    <TabPanel style={{height:'90vh', overflow:'auto'}}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPageOne/>
      </Suspense>
    </TabPanel>

    <TabPanel style={{height:'90vh', overflow:'auto'}}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPageTwo/>
      </Suspense>
    </TabPanel>

    <TabPanel style={{height:'90vh', overflow:'auto'}}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPageThree/>
      </Suspense>
    </TabPanel>

    <TabPanel style={{height:'90vh', overflow:'auto'}}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPageFour/>
      </Suspense>
    </TabPanel>


    <TabList className="tab-container" style={{
      height:' 10vh', border: '1px solid white', position: 'fixed', bottom: 0, 
      left:0 , right:0, margin: 0, display:'flex', justifyContent:'space-evenly', 
      padding: 0, backgroundColor:'white',
      alignItems:'flex-start'}}>
      <Tab className="tab-item">Home</Tab>
      <Tab className="tab-item">Inbox</Tab>
      <Tab className="tab-item">Messages</Tab>
      <Tab className="tab-item">Account</Tab>
    </TabList>

  </Tabs>
);


export default Index;