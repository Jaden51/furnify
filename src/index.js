import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// import * as actions from './store/actions/index';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// store.subscribe(() => {
//     console.log(store.getState());
// });

// store.dispatch(actions.addProduct({ id: 'temp link', weight: 110, category: 'chair' }));