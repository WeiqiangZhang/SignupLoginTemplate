import actionTypes from '../actionTypes';

const initialState = {
  errorMessage: '',
  error: null,
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {
        ...state,
        errorMessage: '',
        error: false,
        loading: true,
      }
    case actionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      }

    case actionTypes.LOG_IN_FAILED:
      return {
        ...state,
        errorMessage: action.errorMessage,
        error: true,
        loading: false
      }
    case actionTypes.LOG_IN_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default reducer;