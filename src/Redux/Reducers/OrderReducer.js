import { GET_ORDERS, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE } from "../Actions/Actions";

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ORDERS:
        return {
          ...state,
          data: [],
          isFetching: true
        };
      case GET_ORDERS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data
        };
      case GET_ORDERS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.error
        };
      default:
        return state;
    }
  };