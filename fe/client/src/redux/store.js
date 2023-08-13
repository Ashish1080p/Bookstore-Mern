import { createStore , combineReducers , applyMiddleware } from 'redux' ;

// importing reducers
import { bookReducer } from './reducers/getBookReducer.js'
import { bookDetailReducers } from './reducers/getBookReducer.js';
import { cartReducer } from './reducers/cartReducer.js'
// used for parsing middleware
import thunk from 'redux-thunk' ;

// to connect redux-devtools extension to store
import { composeWithDevTools } from 'redux-devtools-extension';

// combining reducers
const reducer = combineReducers({
    getBooks : bookReducer ,
    bookInfo : bookDetailReducers , 
    cartItem : cartReducer 
});

const middleware = [thunk];

const store = createStore(
    reducer ,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store ;