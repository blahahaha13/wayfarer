import React from 'react';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import AboutMe from './AboutMe'; 
import { db } from '../firebase';
import UploadPicture from './UploadPicture'

const AccountPage = () =>
  <AuthUserContext.Consumer>
    
    {authUser =>
      <body>
        <div className="container">
          <div className="blank-space"></div>
          <section className="section-vis-wrap">
            <h2>Welcome {authUser.email}</h2>
            <div className="mini-blank-space"></div>
            <PasswordForgetForm />
            <div className="mini-blank-space"></div>
            <PasswordChangeForm />
            <div className="mini-blank-space"></div>
            {console.log(authUser)}
          </section>
          <div className="blank-space"></div>
        </div>
      </body>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
