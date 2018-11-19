import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const PasswordForgetPage = () =>
  <div>
    <PasswordForgetForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <body>
        <div className="container">
          <div className="blank-space"></div>
          <section className="section-vis-wrap">
            <h2>Forgot Password?</h2>
            <div className="mini-blank-space"></div>
            <form onSubmit={this.onSubmit}>
              <input
                value={this.state.email}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                type="text"
                placeholder="Email Address"
              />
              <button disabled={isInvalid} type="submit">Reset My Password</button>

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

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};