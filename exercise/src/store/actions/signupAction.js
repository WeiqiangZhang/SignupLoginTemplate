import actionTypes from '../actionTypes';
import firebase from 'firebase';


export const signup = (email, password) => {
    const auth = firebase.auth();
    return (dispatch) => {
        dispatch({type: actionTypes.SIGN_UP_LOADING,});
        auth.createUserWithEmailAndPassword(email, password).then(res =>
            {dispatch({type: actionTypes.SIGN_UP_SUCCESS})}
        )
        .catch(e => 
          {dispatch({type: actionTypes.SIGN_UP_FAILED, errorMessage: e.message})}
        );
    }
  }
  