import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUp from './components/Login/SignUp';
import HotelDetail from './components/HotelDetail/HotelDetail';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p> Name:  {loggedInUser.name} </p> */}
    <Router>
          {/* <Header/> */}
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/hoteldetail">
              <HotelDetail />
            </Route>
            {/* <PrivateRoute path="/booking/:booking">
              <Booking />
            </PrivateRoute> */}
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
