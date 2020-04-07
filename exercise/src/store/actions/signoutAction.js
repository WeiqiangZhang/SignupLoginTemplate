import actionTypes from '../actionTypes';
import firebase from 'firebase';


export const signout = () => {
    const auth = firebase.auth();
    return (dispatch) => {
        dispatch({type: actionTypes.SIGN_OUT_LOADING,});
        auth.signOut().then(res =>
            {dispatch({type: actionTypes.SIGN_OUT_SUCCESS})}
        )
        .catch(e => 
          {dispatch({type: actionTypes.SIGN_OUT_FAILED, errorMessage: e.message})}
        );
    }
  }
  