import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route path="/forgot-password" component={ForgotPassword} exact />
        <Route path="/faq" component={FAQ} exact />
        <Route path="/contact" component={Contact} exact />
        {/* <Route path="/forgot-password/:id" component={ResetPassword} /> */}
        <Route path="/login" component={Login} exact />
        <Route path="/about" component={About} exact />
        <Route path="/sign-up" component={SignUp} exact />

        {/* <Route path="/404" component={PageNotFound} /> */}
        <Route path="/" component={Home} />
        <Route path="/" component={About} />
        <Redirect from="*" to="/404" />
      </Switch>
    </div>
  );
}

export default App;
