import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageNotFound from "../PageNotFound";
import AboutFeature from "./features/About";
import CartFeature from "./features/Cart";
import CategoryFeature from "./features/Category";
import ContactFeature from "./features/Contact";
import FAQFeature from "./features/FAQ";
import HomeFeature from "./features/Home";
import ProductDetailFeature from "./features/ProductDetail";

function Home(props) {
  return (
    <>
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/" component={HomeFeature} exact />
          <Route path="/cart" component={CartFeature} exact />
          <Route path="/about" component={AboutFeature} exact />
          <Route path="/category" component={CategoryFeature} exact />
          <Route path="/product" component={CategoryFeature} exact />
          <Route path="/product/:id" component={ProductDetailFeature} />
          <Route path="/faq" component={FAQFeature} exact />
          <Route path="/contact" component={ContactFeature} exact />
          <Redirect from="*" to="/404" />
        </Switch>
      </div>
      <Footer />
      <div id="scroll-to-top" className="scroll-to-top">
        <span className="fa fa-angle-up"></span>
      </div>
    </>
  );
}

export default Home;
