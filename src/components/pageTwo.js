import React from 'react'
import logo from '../logo.svg';

class Index extends React.Component {


  componentDidMount() {
    console.log('Index Two - didMount lifecycle')
  }
  
  shouldComponentUpdate() {
    console.log('Index Two - shouldComponentUpdate lifecycle');

    return false;
  }

  render() {
    console.log('Index Two - Render lifecycle');

    return  (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}}>
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Page 1.a
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Page 1.b
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Page 1.c
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Page 1.d
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Page 1.e
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    
    </div>)
  }
}

export default Index;
