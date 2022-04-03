import React from 'react';

export default function Dashboard({name = ''}) {
  return (
    <div className="tab-pane fade show active" id="dashboad" role="tabpanel" aria-labelledby="dashboad-tab">
      <div className="myaccount-content">
        <h3>Dashboard</h3>
        <div className="welcome">
          <p>
            Hello, <strong>{name}</strong>
          </p>
        </div>
        <p>
          From your account dashboard. you can easily check &amp; view your recent orders, manage your
          shipping and billing addresses and edit your password and account details.
        </p>
      </div>
    </div>
  );
}
