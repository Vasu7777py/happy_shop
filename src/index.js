import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";

import Main from "./MainPage/load"
import Login from "./LoginPage/Login"
import Billing from "./BillingPage/Billing"

const PageNotFound = () => {
  return(
    <div>
      404!! PageNotFound
      <br/>
      <Link to="/"> Main </Link>
    </div>
  );
}

const NavBar = () => {
  return (
    <div>
      <header>
        <NavLink exact to="/"> Main </NavLink>
        <NavLink exact to="/login"> Login </NavLink>
        <NavLink exact to="/billing"> Billing </NavLink>
      </header>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><NavBar/><Main/></Route>
      <Route exact path="/login"><NavBar/><Login/></Route>
      <Route exact path="/billing"><NavBar/><Billing/></Route>
      <Route ><PageNotFound/></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("page")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
