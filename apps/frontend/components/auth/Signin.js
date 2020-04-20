import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { signup } from '../../actions/authActions';
import { setNotification } from '../../actions/notificationAction';
import { connect } from 'react-redux';
import { Form, Button, Container, Row } from 'react-bootstrap';

class Signin extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    isAuthenticated: false,
  };

  state = {
    username: '',
    email: '',
    password: '',
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      props.history.push('/');
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
      setNotification('please Enter all fields', 'danger');
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
                placeholder='Enter email'
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
});

export default connect(mapStateToProps, { signup })(Signin);
