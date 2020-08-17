import SignUpPage from './SignUpPage';
import * as signupAction from '../store/actions/signupAction';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      signup: state.signupReducer,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onSignup: (email, password) => dispatch(signupAction.signup(email, password))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);