import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { signup, clearError, loadUser } from '../../actions/authActions';
import { setNotification } from '../../actions/notificationAction';
import { connect } from 'react-redux';
import { Form, Button, Container, Row } from 'react-bootstrap';

class Signin extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.array.isRequired,
    setNotification: PropTypes.func,
    clearError: PropTypes.func,
    loadUser: PropTypes.func,
  };

  static defaultProps = {
    isAuthenticated: false,
    error: [],
  };

  state = {
    username: '',
    email: '',
    password: '',
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/');
      this.props.loadUser();
    }
  }
  componentDidUpdate() {
    if (this.props.error.length > 0) {
      this.props.error.map((err) =>
        this.props.setNotification({ msg: err, type: 'danger' })
      );
      this.props.clearError();
    }
    if (this.props.isAuthenticated) {
      this.props.history.push('/');
      this.props.loadUser();
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      this.state.username === '' ||
      this.state.email === '' ||
      this.state.password === ''
    ) {
      this.props.setNotification({
        msg: 'please Enter all fields',
        type: 'danger',
      });
    } else {
      this.props.signup(this.state);
    }
  };

  render() {
    return (
      <Container>
        <Row className='justify-content-md-center'>
          <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type='text'
                name='username'
                onChange={this.onChange}
                placeholder='Enter username'
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                onChange={this.onChange}
                placeholder='Enter email'
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                onChange={this.onChange}
                type='password'
                placeholder='Password'
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, {
  signup,
  setNotification,
  clearError,
  loadUser,
})(Signin);
