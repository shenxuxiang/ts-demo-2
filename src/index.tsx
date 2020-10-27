import React from 'react';
import ReactDOM from 'react-dom';
import RouterComp from './RouterComp';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Dispatch, Store } from 'redux';

interface MiddleWareArguments {
  dispatch: Dispatch;
  getState: () => Store;
}

type MiddleWare = (args: MiddleWareArguments) => any;

const reduxThunk: MiddleWare = function ({dispatch, getState}) {
  return function(next: any) {
    return function(action: any) {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      } else {
        return next(action);
      }
    };
  };
};

const reduxLogger: MiddleWare = function ({dispatch, getState}) {
  return function (next: any) {
    return function(action: any) {
      console.log(`action: "${action.type}" \n`);
      const result = next(action);
      console.log('nextState:', getState());
      return result;
    };
  };
};

const store: Store = applyMiddleware(reduxThunk, reduxLogger)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <RouterComp />
  </Provider>,
  document.getElementById('root')
);
