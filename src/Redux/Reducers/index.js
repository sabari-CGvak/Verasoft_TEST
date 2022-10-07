import { combineReducers } from 'redux';
import SummaryReducer from './SummaryReducer';
import OrderReducer from './OrderReducer';

const rootReducer = combineReducers({
    SummaryReducer,
    OrderReducer,
})

export default rootReducer