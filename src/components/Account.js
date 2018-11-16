import React from 'react';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import UploadPicture from './UploadPicture'

const AccountPage = () =>
  <AuthUserContext.Consumer>
    
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <UploadPicture />
        <PasswordForgetForm />
        <PasswordChangeForm />
        {console.log(authUser)}
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
