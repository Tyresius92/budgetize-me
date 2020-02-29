import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQjvT0YibQEoCNJ_h9QE8qMvXv-VQaXKY",
  authDomain: "budgetize-me.firebaseapp.com",
  databaseURL: "https://budgetize-me.firebaseio.com",
  projectId: "budgetize-me",
  storageBucket: "budgetize-me.appspot.com",
  messagingSenderId: "41966448870",
  appId: "1:41966448870:web:351f596b8c88c948dd8b27",
  measurementId: "G-XBSKXRNW3F",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  // *** Auth API ***

  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  sendPasswordResetEmail = email => this.auth.sendPasswordResetEmail(email);

  updateCurrentUserPassword = newPassword =>
    this.auth.currentUser.updatePassword(newPassword);

  signInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  signOut = () => this.auth.signOut();
}

export default Firebase;
