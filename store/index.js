import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";


/* Reducer */
import reduceApp, { exampleInitialState } from '../Slice';

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  reduceApp,
  exampleInitialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);