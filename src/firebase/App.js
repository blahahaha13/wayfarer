import React, { Component } from 'react';
import * as  firebase from 'firebase';

// const doCreateUser = [(id, username, email, photoURL) =>
// db.ref(`users/${id}`).set({
//   username,
//   email,
//   photoURL,
// })
// ];
// localStorage
// class App extends React.Component {
//   componentWillMount () {
    const config = {
      apiKey: "AIzaSyCsE02H1lFtW2RaRygITvr-uPUySj6aNco",
      authDomain: "wayfarer-38067.firebaseapp.com",
      databaseURL: "https://wayfarer-38067.firebaseio.com",
      projectId: "wayfarer-38067",
      storageBucket: "wayfarer-38067.appspot.com",
      messagingSenderId: "468268311649"
      };
      firebase.initializeApp(config);
      const db = firebase.database();

      db.ref('users').push({
        username: 'Nikola Tesla',
        email: 'N@gmail.com',
        photoURL:'https://vignette.wikia.nocookie.net/sqmegapolis/images/2/2d/RealWorld_Stonehenge.jpg',
        })
        .then(() => {
        console.log('Data is saved!');
        })
        .catch((e) => {
        console.log('Failed.', e);
        });





      export { firebase, database as default};

//       firebase.database().ref('users/001').set (
//         {id: 001,
//          username: 'Praveen',
//          email:'praveen@gmail.com',
//          photoURL:''
//         }
      
//       ).then(() => {
//         console.log('INSERTED !');
//       }).catch((error) =>{
//         console.log('ERROR !');

//       })
//   }

// render(){
//   return {
//     <View style = {{ alignItems: 'center', height: '100%', justifyContent: 'center'}}>
//       <Text style={{ fontWeight: 'bold', fontSize; 18}}>

//       </Text>
//     </View>
//   }
// }
// }