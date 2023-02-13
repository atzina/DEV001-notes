import React from'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './componentes/Home';
import Login from './componentes/Login';
import Register from './componentes/Register';
import Wall from './componentes/Wall';


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
