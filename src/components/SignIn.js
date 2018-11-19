import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

  const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
    password,
    } = this.state

    const {
      history,
    } = this.props;
    auth.doSignInWithEmailAndPassword(email, password)
      .then (() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.LANDING);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }
  
  render () {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';
      
    return (
      <body>
        <div className="container">
          <div className="blank-space"></div>
          <section className="section-vis-wrap">
            <h2>Sign In</h2>
            <div className="mini-blank-space"></div>
            <form onSubmit={this.onSubmit}>
              <input
                value={email}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                type="text"
                placeholder="Email Address"
              />
              <input
                value={password}
                onChange={event => this.setState(byPropKey('password', event.target.value))}
                type="password"
                placeholder="Password"
              />
              <button disabled={isInvalid} type="submit">
                Sign In 
              </button>

              { error && <p>{error.message}</p>}
            </form>
            <div className="mini-blank-space"></div>
            <PasswordForgetLink />
            <SignUpLink />
          </section>
          <div className="blank-space"></div>
        </div>
      </body>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};