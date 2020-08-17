import ProtectedPage from './ProtectedPage';
import { connect } from 'react-redux';
import * as signoutAction from '../store/actions/signoutAction';

const mapStateToProps = state => {
    return {
      signout: state.signoutReducer,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onSignout: () => dispatch(signoutAction.signout())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedPage);