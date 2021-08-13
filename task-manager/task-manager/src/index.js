import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyAuc8eQbQ9dQ1dqsubJlA6KwnmpPF7aZEE",
    authDomain: "task-manager-4d9dd.firebaseapp.com",
    projectId: "task-manager-4d9dd",
    storageBucket: "task-manager-4d9dd.appspot.com",
    messagingSenderId: "485138910580",
    appId: "1:485138910580:web:738576364b69efc5ba3021"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


