import { auth } from "../services/firebase";

export function register(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
  }

  export function signin(email,password) {
      return auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in 
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

export function logOut() {
    return auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}