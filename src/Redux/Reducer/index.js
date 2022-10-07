import { combineReducers } from 'redux';
import GetSummaryReducer from './GetSummaryReducer';
import GetOrderReducer from './GetOrderReducer';

const rootReducer = combineReducers({
    GetSummaryReducer,
    GetOrderReducer,
})

export default rootReducer