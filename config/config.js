import firebase from 'firebase';

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);

  export const f = firebase;
  export const databse = firebase.database();
  export const auth = firebase.auth();