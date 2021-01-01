import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCQGLISB4Q3GzAQjpwxM9z67QdJLU74occ",
    authDomain: "clubchat-98654.firebaseapp.com",
    databaseURL: "https://clubchat-98654-default-rtdb.firebaseio.com/"
  };
  
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();