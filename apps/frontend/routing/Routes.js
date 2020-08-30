import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar';
import Login from '../components/auth/Login';
import Signin from '../components/auth/Signin';
import Notification from '../components/layouts/Notification';
import PrivateRoute from './PrivateRoute';
import Messenger from '../components/chat/Messenger';

const Routes = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Notification />
        <Switch>
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute path='/' component={Messenger} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default Routes;
