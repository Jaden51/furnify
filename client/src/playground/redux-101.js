import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

const resetCount = () => {
    return {
        type: 'RESET',
    }
}

const setCount = ({ count } = {}) => {
    return {
        type: 'SET',
        count
    }
}

// Reducers
    // 1. Reducres are pure functions - output only determined by the input
    // 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount({ count: 0 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

unsubscribe();

// store.subscribe(() => {
//     console.log(store.getState());
// });

// const productOne = store.dispatch(actions.addProduct({ url: 'temp link', progress: 0, category: 'chair' }));
// const productTwo = store.dispatch(actions.addProduct({ url: 'temp link', progress: 50, category: 'couch' }));

// store.dispatch(actions.removeProduct({ id: productOne.product.id }));
// store.dispatch(actions.editProduct(productTwo.product.id, { category: 'stool' }));

// store.dispatch(actions.setTextFilter('loveseat'));
// store.dispatch(actions.setTextFilter());

// store.dispatch(actions.sortByAmount());
// store.dispatch(actions.sortByDate());

// store.dispatch(actions.setStartDate(125));
// store.dispatch(actions.setStartDate());
// store.dispatch(actions.setEndDate(1250));