import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_YzrC-_Oai7AnhyNbIEEkAmmXMwwWBc4",
    authDomain: "cart-e26bc.firebaseapp.com",
    databaseURL: "https://cart-e26bc.firebaseio.com",
    projectId: "cart-e26bc",
    storageBucket: "cart-e26bc.appspot.com",
    messagingSenderId: "500234740487",
    appId: "1:500234740487:web:12bb4c56b27ca3c33b5ba2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
