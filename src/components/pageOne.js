import React, {useEffect, useState} from 'react'
import logo from '../logo.svg';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('render page one!')
    setLoading(false)
  }, [])

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column", height:'100%'}}>
      {loading ? <div>Loading</div> : 
        <>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is Page 1
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </>
      }
    </div>
  );
}


export default (Index);