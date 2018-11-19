import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth /> 
    }
  </AuthUserContext.Consumer>
  
const NavigationAuth = () =>

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark-1">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={routes.LANDING}>WAYFARER</Link>
        </li>
        <li className="nav-item">
          <Link to={routes.NOTE}>Posts</Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={routes.ACCOUNT}>Account</Link>
        </li>
        <li className="nav-item">
          <SignOutButton />
        </li>
      </ul>
    </div>
  </nav>

  // <ul>
  //   <li><Link to={routes.NOTE}>Posts</Link></li>
  //   <li><Link to={routes.LANDING}>Landing</Link></li>
  //   <li><Link to={routes.ACCOUNT}>Account</Link></li>
  //   <li><SignOutButton /></li>
  // </ul>

const NavigationNonAuth = () =>

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark-1">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={routes.LANDING}>WAYFARER</Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={routes.SIGN_IN}>Sign In</Link>
        </li>
        <li className="nav-item">
          <Link to={routes.SIGN_UP}>Sign Up</Link>
        </li>
      </ul>
    </div>
  </nav>

  // <ul>
  //   <li><Link to={routes.LANDING}>Landing</Link></li>
  //   <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  // </ul>

export default Navigation;