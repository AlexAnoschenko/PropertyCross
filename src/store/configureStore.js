import { createStore } from 'redux';
import { rootReducer, initialState } from '../reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = createStore(rootReducer, initialState, devToolsEnhancer());
