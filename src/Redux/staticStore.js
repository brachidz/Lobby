import { createStore, combineReducers, applyMiddleware } from 'redux';
import { extractJwt, getStaticData } from './middleware/crudMiddleware'
import staticDetailsReducer from './reducers/staticDetailsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({ staticDetailsReducer  });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(extractJwt, getStaticData)));
window.store = store;
export default store;
store.dispatch({ type: 'EXTRACT_JWT' });
