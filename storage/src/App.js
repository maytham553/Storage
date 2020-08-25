import React from 'react';
import './App.css';
import Nav from './Component/Nav'
import {BrowserRouter} from "react-router-dom";
import Routes from './Routes';




class App extends React.Component {

render(){

  return (

    <BrowserRouter>
    <div className="App">
      <Nav className="nav"/>
     <Routes/>
    </div>

    </BrowserRouter>
  );
}

}


export default App;
