import Cookies from 'js-cookie';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import StorageKeys from './src/constants/storage-keys';

PublicRoute.propTypes = {};

function PublicRoute({ path, component }) {
  const PrivateComponent = component;

  return (
    <Route
      path={path}
      render={(props) => {
        const isLoggedIn = !!Cookies.get(StorageKeys.TOKEN);
        if (isLoggedIn) {
          return <Redirect to="/" />;
        }

        return <PrivateComponent {...props} />;
      }}
      exact
    />
  );
}

export default PublicRoute;
