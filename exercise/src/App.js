import React from 'react';
import logo from './logo.svg';
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
  useHistory,
  useLocation
} from "react-router-dom";

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      login: state.loginReducer,
    };
  };

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.idToken ? (
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
          <PrivateRoute path="/protected" idToken={props.login.idToken}>
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps, null)(App);
