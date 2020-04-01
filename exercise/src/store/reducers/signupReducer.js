import actionTypes from '../actionTypes';

const initialState = {
  errorMessage: '',
  error: null,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP:
      return {
        ...state,
        errorMessage: '',
        error: false,
        loading: true,
      }
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      }

    case actionTypes.SIGN_UP_FAILED:
      return {
        ...state,
        errorMessage: action.errorMessage,
        error: true,
        loading: false
      }
    case actionTypes.SIGN_UP_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default reducer;