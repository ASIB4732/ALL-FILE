import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Componemts/Header/Header';
import Home from './Componemts/Home/Home';
import Registetion from './Componemts/Registetion/Registetion';
import Login from './Componemts/LogIn/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Componemts/PrivateRoute/PrivateRoute';


export const UserId=createContext()
function App() {
  const [users,setUser]=useState()
  return (
    <UserId.Provider value={[users,setUser]}>
    <div className="App">
      
    <Router>
      <Switch>
      <Route path='/Home'>
      <Home></Home>
      </Route>

      <Route path='/logIn'>
      <Login></Login>
      </Route>

      <Route exact path='/'>
      <Home></Home>
      </Route>
       
      <PrivateRoute path='/user/:user'>
        <Registetion></Registetion>
      </PrivateRoute>
      
      </Switch>
    </Router>
    </div>
    </UserId.Provider>
  );
}

export default App;
