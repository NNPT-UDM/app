import React from 'react';
import { useSelector } from 'react-redux';
import HeaderAreaBig from '../../../../components/HeaderAreaBig';
import AccountDetail from './components/AccoutDetail';
import Address from './components/Address';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders/Index';

export default function ProfileFeature() {
  const user = useSelector((state) => state.user.current);
  return (
    <>
      <HeaderAreaBig breadcrumb="My Account" title="My Account" />
      <section className="my-account-area section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="my-account-tab-menu nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="dashboad-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#dashboad"
                  type="button"
                  role="tab"
                  aria-controls="dashboad"
                  aria-selected="true"
                >
                  Dashboard
                </button>
                <button
                  className="nav-link"
                  id="orders-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#orders"
                  type="button"
                  role="tab"
                  aria-controls="orders"
                  aria-selected="false"
                >
                  {' '}
                  Orders
                </button>

                <button
                  className="nav-link"
                  id="address-edit-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#address-edit"
                  type="button"
                  role="tab"
                  aria-controls="address-edit"
                  aria-selected="false"
                >
                  address
                </button>
                <button
                  className="nav-link"
                  id="account-info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#account-info"
                  type="button"
                  role="tab"
                  aria-controls="account-info"
                  aria-selected="false"
                >
                  Account Details
                </button>
                <button className="nav-link" type="button">
                  Logout
                </button>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="tab-content" id="nav-tabContent">
                <Dashboard name="Alex Nguyen" />
                <Orders />
                <Address />
                <AccountDetail />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
