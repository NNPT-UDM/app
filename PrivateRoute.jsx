import Cookies from 'js-cookie';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import StorageKeys from './src/constants/storage-keys';

PrivateRoute.propTypes = {};

function PrivateRoute({ path, component }) {
  const PrivateComponent = component;

  return (
    <Route
      path={path}
      render={(props) => {
        const isLoggedIn = !!Cookies.get(StorageKeys.TOKEN);
        if (!isLoggedIn) {
          return <Redirect to="/login" />;
        }

        return <PrivateComponent {...props} />;
      }}
    />
  );
}

export default PrivateRoute;
