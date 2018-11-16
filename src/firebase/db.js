import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const doUploadPicture = (id, photoURL) =>
  db.ref(`users/${id}`).set({
    photoURL,
  });

export const onceGetUsers = () => 
  db.ref('users').once('value');