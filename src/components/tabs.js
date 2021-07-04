/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {Suspense, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaHome, FaInbox, FaFacebookMessenger , FaUserCircle} from 'react-icons/fa'
import 'react-tabs/style/react-tabs.css';

const LazyPageOne = React.lazy(() => import('./pageOne'));
const LazyPageTwo = React.lazy(() => import('./pageTwo'));
const LazyPageThree = React.lazy(() => import('./pageThree'));
const LazyPageFour = React.lazy(() => import('./pageFour'));

const active = 'rgba(238, 105, 50, 1)';
const inActive = 'rgba(193, 195, 197, 1)';

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectTab = (firstTab) => setCurrentIndex(firstTab)
  
  return (
    <Tabs style={{height:'100vh'}} onSelect={selectTab}>
      
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
        <Tab className="tab-item"><FaHome size={20} color={currentIndex === 0 ? active : inActive}/></Tab>
        <Tab className="tab-item"><FaInbox size={20} color={currentIndex === 1 ? active : inActive}/></Tab>
        <Tab className="tab-item"><FaFacebookMessenger size={20} color={currentIndex === 2 ? active : inActive}/></Tab>
        <Tab className="tab-item"><FaUserCircle size={20} color={currentIndex === 3 ? active : inActive}/></Tab>
      </TabList>

    </Tabs>
  )
}

export default Index;