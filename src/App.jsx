import { Redirect, Route, Switch } from 'react-router-dom';
import PublicRoute from '../PublicRoute';
// import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <Switch>
        <PublicRoute path="/login" component={Login} exact />
        <PublicRoute path="/sign-up" component={SignUp} exact />
        <Route path="/404" component={PageNotFound} />
        <Route path="/" component={Home} />
        {/* <Route path="/forgot-password/:id" component={ResetPassword} /> */}
        <Redirect from="*" to="/404" />
      </Switch>
    </>
  );
}

export default App;
