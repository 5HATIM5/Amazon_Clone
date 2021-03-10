import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login.js'
import { useStateValue } from './StateProvider';
import React , {useEffect}from 'react';
import {auth} from "./Firebase.js"



function App() {

  const[{basket},dispatch]= useStateValue();

  useEffect(() => {
  
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser){

        } else {
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
