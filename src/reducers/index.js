import { combineReducers } from 'redux';
import apartments from './apartments';
import recentList from './recentList';
import locations from './locations';
import favorites from './favorites';

const rootReducer = combineReducers({
    apartments,
    recentList,
    locations,
    favorites,
});

export default rootReducer;
