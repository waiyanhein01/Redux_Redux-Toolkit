// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { counterReducer } from "./reducer/counter.reducer";
// import { thunk } from "redux-thunk";

import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counter.slice'

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})

// const reducer = combineReducers({
//     counter: counterReducer
// })

// export const store = createStore(reducer,applyMiddleware(thunk))