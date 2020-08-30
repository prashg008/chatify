import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Navbar as BootNav } from 'react-bootstrap';
import { logout } from '../../actions/authActions';

const Navbar = ({ title, icon, user, logout, isAuthenticated }) => {
  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <BootNav.Text>
        <span style={{ marginRight: '20px' }}>
          Hello {user && user.username}
        </span>
        <a onClick={onLogout} href='#'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='.d-block .d-md-none'>Logout</span>
        </a>
      </BootNav.Text>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <Nav.Link as={Link} to='/signin'>
        Signin
      </Nav.Link>
      <Nav.Link as={Link} to='/login'>
        Login
      </Nav.Link>
    </Fragment>
  );
  return (
    <BootNav style={{ height: '8vh' }}>
      <BootNav.Brand as={Link} to='/'>
        <i className={icon} /> {title}
      </BootNav.Brand>
      <BootNav.Toggle aria-controls='responsive-navbar-nav' />
      <BootNav.Collapse
        id='responsive-navbar-nav'
        className='justify-content-end'
      >
        <Nav>{isAuthenticated ? authLinks : guestLinks}</Nav>
      </BootNav.Collapse>
    </BootNav>
  );
};

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

Navbar.defaultProps = {
  title: 'Chatify',
  icon: 'fas fa-id-card-alt',
  user: null,
  isAuthenticated: false,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
