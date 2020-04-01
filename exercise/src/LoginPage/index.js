import LoginPage from './LoginPage';
import * as loginAction from '../store/actions/loginAction';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      login: state.loginReducer,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onLogin: (email, password) => dispatch(loginAction.login(email, password))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);