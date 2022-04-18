import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar';
import {  Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Error404 from './Components/Error404';
import About from './Components/About';
import Logout from './Components/Logout';
import Appp from './Appp';
const App = () => {
  return (
    <>
      <Navbar />

<Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login' >
        <Login />
      </Route>
      <Route path='/Appp' >
        <Appp />
      </Route>
      <Route path='/registration'>
        <Registration />
      </Route>
      <Route path='/Logout'>
        <Logout />
      </Route>
      <Route path='/About'>
        <About />
      </Route>

      <Route>
        <Error404 />
      </Route>
    </Switch>
    </>
  );
};

export default App;
