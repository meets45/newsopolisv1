import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      mode: "light"
    }
  }
  toggleMode = () =>{
    if(this.state.mode === "light"){
      this.setState({mode: "dark"});
      document.body.style.backgroundColor = "#0a261f";
      // showAlert("Dark mode has been enabled", "success");
    }
    else{
      this.setState({mode: "light"});
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode has been enabled", "success");
    }
  }
  render() {
    return (
      <div>
        {/* <Router> */}
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
        <News key="general" pageSize={9} country="in" category="general" mode={this.state.mode} toggleMode={this.toggleMode}/>
        {/* <News key="business" pageSize={9} country="in" category="business"/>
        <News key="entertainment" pageSize={9} country="in" category="entertainment"/>
        <News key="science" pageSize={9} country="in" category="science"/>
        <News key="sports" pageSize={9} country="in" category="sports"/>
        <News key="technology" pageSize={9} country="in" category="technology"/> */}
{/*         
      <Routes>
          <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment"/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology"/>}/>
      </Routes>
        </Router> */}
      </div>
    )
  }
}
