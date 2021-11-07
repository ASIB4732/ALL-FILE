import logo from './logo.svg';
import './App.css';
import LogIn from './Components/logIn/LogIn';
import MatarialUiON from './Components/matarial-ui/MatarialUiON';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useContext, useState } from 'react';
export const userId = createContext();

function App() {
  const [user, setUser]=useState({})
  return (
    <div className="App">
      <header className="App-header">
        <userId.Provider value={[user, setUser]}>
          <h3>User:- {user.email}</h3>
        <LogIn></LogIn>
        <MatarialUiON></MatarialUiON>
        </userId.Provider>
      </header>
    </div>
  );
}

export default App;
