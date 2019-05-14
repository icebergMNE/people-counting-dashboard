import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Redirect exact from="/" to="/register" />
      {/* <Route path="/" redirect exact component={Home}/> */}
      <Route path="/login"  component={Login}/>
      <Route path="/register"  component={Register}/>

      <Route path="/admin" render={props => <AdminLayout {...props} />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
