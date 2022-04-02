import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/sign-up" component={SignUp} exact />
        <Route path="/404" component={PageNotFound} />
        <Route path="/" component={Home} />
        {/* <Route path="/forgot-password/:id" component={ResetPassword} /> */}
        <Redirect from="*" to="/404" />
      </Switch>
    </>
  );
}

export default App;
