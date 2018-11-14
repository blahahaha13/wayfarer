import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import { errorPrefix } from '@firebase/util';
// import {doPasswordUpdate} from '../firebase/auth'

const SignUpPage = () =>
<div>
  <h1>SignUp</h1>
  <SignUpForm />
</div>
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  } 
  onSubmit = (event) => {
  }
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">
          Sign Up
        </button>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}
const SignUpLink = () =>
  <p>
    Don't have an account? Do Sign up.
    {' '}
    <Link to={routes.SIGN_UP}>Sign doPasswordUpdate</Link>
  </p>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};



export default SignUpPage;
export {
  SignUpForm,
  SignUpLink,
};