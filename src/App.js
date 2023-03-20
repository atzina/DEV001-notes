import React from'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Vistas/Home.js';
import Wall from './Vistas/Wall.js';


function App() {
  return (
    <Routes>
      <Route exact path='/' element = {<Home/>}/> 
      <Route path='/wall' element = {<Wall/>}/>  
    </Routes>
);
}

export default App;
