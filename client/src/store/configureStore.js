import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import productsReducer from './reducers/products';
import filtersReducer from './reducers/filters';
import alertsReducer from './reducers/alerts';
import authReducer from './reducers/auth';

const middleware = [thunk];

const rootReducer = combineReducers({
  products: productsReducer,
  filters: filtersReducer,
  alerts: alertsReducer,
  auth: authReducer
});

export default () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
}