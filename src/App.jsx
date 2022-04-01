import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ProductDetail from "./pages/ProductDetail";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route path="/forgot-password" component={ForgotPassword} exact />
        <Route path="/category" component={Category} exact />
        <Route path="/product" component={Category} exact />
        <Route path="/product" component={ProductDetail} exact />
        <Route path="/faq" component={FAQ} exact />
        <Route path="/contact" component={Contact} exact />
        {/* <Route path="/forgot-password/:id" component={ResetPassword} /> */}
        <Route path="/login" component={Login} exact />
        <Route path="/about" component={About} exact />
        <Route path="/sign-up" component={SignUp} exact />
        <Route path="/404" component={PageNotFound} />
        <Route path="/" component={Home} />
        <Redirect from="*" to="/404" />
      </Switch>
    </div>
  );
}

export default App;
