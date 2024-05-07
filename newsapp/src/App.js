import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import './App.css'; 
import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export class App extends Component {
  constructor(){
    super();
    this.state={
      mode:"light",
    }
  }
  tougle=()=>{
    if(this.state.mode=="light")
    {
      this.setState({mode:"dark"});
      // console.log(this.state.mode);
    }
    else{
      this.setState({mode:"light"});
      // console.log(this.state.mode);
    }
  }
  
  render() {

    
    return (
      <>
        
        <Navbar tougle={this.tougle} mode={this.state.mode}/>
        <News contry="in" catagary={"science"} pageSize={8} />
        
      </>

    )
  }
}

export default App
