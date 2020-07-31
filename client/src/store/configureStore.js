import { createStore, combineReducers } from 'redux';

import productsReducer from './reducers/products';
import filtersReducer from './reducers/filters';

const rootReducer = combineReducers({
  products: productsReducer,
  filters: filtersReducer
});

export default () => {
    const store = createStore(rootReducer);
    return store;
}