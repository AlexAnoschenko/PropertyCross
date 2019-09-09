import { combineReducers } from 'redux';
import apartments from './apartments';
import recentList from './recentList';

const rootReducer = combineReducers({
    apartments,
    recentList,
});

export default rootReducer;
