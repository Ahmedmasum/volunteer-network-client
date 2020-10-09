import React, { createContext, useState } from "react";

import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import RegisteredEvents from "./components/RegistrationDetails/RegisteredEvents";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AdminPanel from "./components/AdminPanel/AdminPanel";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <SearchBar></SearchBar>
            <Body></Body>
          </Route>
          <PrivateRoute path="/registration-form/:cardId">
            <RegistrationForm></RegistrationForm>
          </PrivateRoute>
          <PrivateRoute path="/registered-events">
            <RegisteredEvents></RegisteredEvents>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin-panel">
            <AdminPanel></AdminPanel>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
