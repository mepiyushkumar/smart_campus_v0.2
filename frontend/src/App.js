import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Detect from './Detect';
import Table from './Table';
import "./App.css"
function App(){
  return(
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path='/Detect' element={<Detect/>}/>
            <Route exact path='/Table' element={<Table/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
