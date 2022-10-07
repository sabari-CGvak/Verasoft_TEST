export const GET_SUMMARY = 'GET_SUMMARY';
export const GET_SUMMARY_SUCCESS = 'GET_SUMMARY_SUCCESS';
export const GET_SUMMARY_FAILURE = 'GET_SUMMARY_FAILURE';

export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';


export const Summary = () => ({type: GET_SUMMARY});
export const Orders = () => ({type: GET_ORDERS})