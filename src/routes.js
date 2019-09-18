import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import SignUp from "./pages/SignUp";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/forgot" component={Forgot} />
    </BrowserRouter>
  );
}