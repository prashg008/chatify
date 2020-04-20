import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import Navbar from './components/layouts/Navbar';
import Login from './components/auth/Login';
import Signin from './components/auth/Signin';
import Notification from './components/layouts/Notification';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Notification />
          <Switch>
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
