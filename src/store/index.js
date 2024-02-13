// import redux from 'redux';
// import {createStore} from 'redux';
import { configureStore} from '@reduxjs/toolkit';

import counterReducer from './counter-slice';
import authReducer from './auth-slice';





// const counterReducer = (state = {counter: 0, showCounter: true}, action) => {
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter:!state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// };


// const store = createStore(counterSlice.reducer);
const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: { counter: counterReducer, auth: authReducer }
});




export default store;