import React from 'react';
import { Switch, Route } from "react-router-dom";
import AdminForm from './AdminForm';
import ContentUsers from './Users/ContentUsers';
import ContentCarts from './Carts/ContentCarts';
import Dashboard from './Dashboard__page/index';
import ContentProducts from './Products/ContentProducts';

const RoutersAdmin = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/admin/users" component={ContentUsers} />
        <Route path="/admin/account" component={AdminForm} />
        <Route path="/admin/carts" component={ContentCarts} />
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/products" component={ContentProducts} />
      </Switch>
    </React.Fragment>
  )
}

export default RoutersAdmin