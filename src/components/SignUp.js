import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';
import { auth, db } from '../firebase';
// import { errorPrefix } from '@firebase/util';
// import {doPasswordUpdate} from '../firebase/auth'

const SignUpPage = ({ history }) =>
  <div>
  <SignUpForm history={history} />
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
    const {
      username,
      email,
      passwordOne,
    } = this.state;
    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Creating user in own db as well as firebase
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.LANDING);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <body>
        <div className="container">
          <div className="blank-space"></div>
          <section className="section-vis-wrap">
            <h2>Sign Up</h2>
            <div className="mini-blank-space"></div>
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
              <button disabled={isInvalid} type="submit">
                Sign Up
              </button>
              { error && <p>{error.message}</p> }
            </form>
            <div className="mini-blank-space"></div>
          </section>
          <div className="blank-space"></div>
        </div>
      </body>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account? 
    {' '}
    <Link to={routes.SIGN_UP}>Do Sign up</Link>
  </p>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};



export default withRouter(SignUpPage);
export {
  SignUpForm,
  SignUpLink,
};