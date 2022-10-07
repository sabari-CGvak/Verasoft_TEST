const initialState = {
    data: null,
    dataFetched: false,
    isFetching: false,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "GET_SUMMARY":
        return {
          ...state,
          data: null,
          isFetching: true
        };
      case "GET_SUMMARY_SUCCESS":
        return {
          ...state,
          isFetching: false,
          data: action.data
        };
      case "GET_SUMMARY_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: action.error
        };
      default:
        return state;
    }
  };