import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import counter  from 'reducers/counter';
import userInfo  from 'reducers/userInfo';
import {combineReducers} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({counter, userInfo}), /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;