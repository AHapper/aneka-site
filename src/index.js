import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyBNDW84HtQMSu3KqqlRJkAHiOgnX3DkxE0",
  authDomain: "aneka-site.firebaseapp.com",
  projectId: "aneka-site",
  storageBucket: "aneka-site.appspot.com",
  messagingSenderId: "935094023120",
  appId: "1:935094023120:web:7ac7ba8a38d1c20d023fd5",
  measurementId: "G-KHS912S44R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
