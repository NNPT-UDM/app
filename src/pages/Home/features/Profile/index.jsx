import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAreaBig from '../../../../components/HeaderAreaBig';
import { logout } from '../../../Login/userSlice';
import AccountDetail from './components/AccountDetail';
import Address from './components/Address';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders/Index';
import PasswordChange from './components/PasswordChange';


export default function ProfileFeature() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.current);
  //Handle logout
  const handleLogout = async () => {
    try {
      const action = logout();
      await dispatch(action);
      history.push('/');
    } catch (error) {
      toast.error(error.message);
    }
  };
  //Handle Change Account Detail
  const handleSubmitAccountDEtail = async (values) => {
    console.log(values);
    try {
    } catch (error) {
      toast.error(error.message);
    }
  };
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
                <button
                  className="nav-link"
                  id="password-change-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#password-change"
                  type="button"
                  role="tab"
                  aria-controls="password-change"
                  aria-selected="false"
                >
                  Password Change
                </button>
                <button onClick={handleLogout} className="nav-link" type="button">
                  Logout
                </button>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="tab-content" id="nav-tabContent">
                <Dashboard name={user?.profile?.display_name} />
                <Orders />
                <Address
                  name={user?.profile?.display_name}
                  address={user?.profile?.contacts?.address}
                  phone={user?.credential?.phone}
                />
                <AccountDetail
                  email={user?.credential?.email}
                  display_name={user?.profile?.display_name}
                  onSubmit={handleSubmitAccountDEtail}
                />
                <PasswordChange />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
