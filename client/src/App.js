import Main from "./pages/main/main.component.jsx";
import MyNavbar from "./Components/Navbar/navbar.component.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/login.component";
import Profile from "./pages/profile/profile.component";
import SignUp from "../src/pages/signup/signup.component";
import React from "react";
import './App.css';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path={"/"} component = { Login } />
          <Route exact path={"/signup"} component = { SignUp } />
          <Route exact path={"/profile"} component = { Profile } />
          <Route exact path={"/map"} component = { Map } />
      </Switch>
    </div>
    </Router>
  );
};

export default App;
