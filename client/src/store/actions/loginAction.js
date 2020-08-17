import actionTypes from '../actionTypes';
import firebase from 'firebase';


export const login = (email, password) => {
    const auth = firebase.auth();
    return (dispatch) => {
        dispatch({type: actionTypes.LOG_IN_LOADING,});
        auth.signInWithEmailAndPassword(email, password)
        .then(res => {dispatch({type: actionTypes.LOG_IN_SUCCESS})})
        .catch(e => 
          {dispatch({type: actionTypes.LOG_IN_FAILED, errorMessage: e.message})}
        );
    }
  }
  