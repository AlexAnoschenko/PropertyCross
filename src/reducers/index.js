import { combineReducers } from 'redux';
import apartments from './apartments';
import recentList from './recentList';
import locations from './locations';

const rootReducer = combineReducers({
    apartments,
    recentList,
    locations,
});

export default rootReducer;
