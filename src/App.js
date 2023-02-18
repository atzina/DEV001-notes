import React from'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Vistas/Home';
import Login from './Vistas/Login';
import Register from './Vistas/Register';
import Wall from './Vistas/Wall';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}> </Route>
      <Route path='/login' element = {<Login/>}> </Route>
      <Route path='/register' element = {<Register/>}> </Route>
      <Route path='/wall' element = {<Wall/>}> </Route>    
    </Routes>
)
}

export default App;
