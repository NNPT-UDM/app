import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrivateRoute from '../../../PrivateRoute';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StorageKeys from '../../constants/storage-keys';
import { getMe, logout } from '../Login/userSlice';
import AboutFeature from './features/About';
import CartFeature from './features/Cart';
import CategoryFeature from './features/Category';
import ContactFeature from './features/Contact';
import FAQFeature from './features/FAQ';
import HomeFeature from './features/Home';
import ProductDetailFeature from './features/ProductDetail';
import ProfileFeature from './features/Profile';
import Cookies from 'js-cookie';
import CheckoutFeature from './features/Checkout';
function Home(props) {
  const isLoggedIn = !!Cookies.get(StorageKeys.TOKEN);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      if (isLoggedIn) {
        try {
          const resultAction = await dispatch(getMe());
        } catch (error) {
          toast.error(error.message);
          history.push('/');
        }
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/" component={HomeFeature} exact />
          <Route path="/cart" component={CartFeature} exact />
          <PrivateRoute path="/profile" component={ProfileFeature} exact />
          {/* <Route path="/profile" component={ProfileFeature} exact /> */}
          <Route path="/about" component={AboutFeature} exact />
          <Route path="/category" component={CategoryFeature} exact />
          <Route path="/checkout/:cartId" component={CheckoutFeature} />
          <Route path="/product/:productId" component={ProductDetailFeature} />
          <Route path="/product" component={CategoryFeature} exact />
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
