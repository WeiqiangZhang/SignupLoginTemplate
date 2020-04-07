import React from 'react';
import './App.css';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import ProtectedPage from './ProtectedPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import firebase from 'firebase';

function PrivateRoute({ children, ...rest }) {
  const curr = firebase.auth().currentUser;
  return (
    <Route
      {...rest}
      render={({ location }) =>
      curr !== null && curr.emailVerified ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App(props) {
  console.log(firebase.auth().currentUser)
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <PrivateRoute path="/protected" >
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
