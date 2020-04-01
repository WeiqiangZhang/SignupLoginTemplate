import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import loginReducer from './store/reducers/loginReducer';
import signupReducer from './store/reducers/signupReducer';
import firebase from 'firebase';

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  signupReducer: signupReducer,
  form: formReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));

var firebaseConfig = {
  apiKey: "AIzaSyD8dwG_vD60bKp6M9NQgOYI4aPg1AYdbk8",
  authDomain: "signupsigninexercise.firebaseapp.com",
  databaseURL: "https://signupsigninexercise.firebaseio.com",
  projectId: "signupsigninexercise",
  storageBucket: "signupsigninexercise.appspot.com",
  messagingSenderId: "854364158098",
  appId: "1:854364158098:web:2b853738defd4c89b54e4b",
  measurementId: "G-R9Z32QFVM2"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      if (!user.emailVerified){
        user.sendEmailVerification().then(function() {
          }).catch(function(error) {
            // An error happened.
          });
      }              
  } else {
    // No user is signed in.
  }
});      

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
