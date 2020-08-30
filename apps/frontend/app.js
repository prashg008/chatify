import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routing/Routes';
import { connect } from 'react-redux';
import { loadUser } from './actions/authActions';

const App = ({ isAuthenticated, loadUser }) => {
  const token = localStorage.getItem('access');
  if (token && !isAuthenticated) {
    console.log('loaduser');
    loadUser();
  }
  return <Routes />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loadUser })(App);
