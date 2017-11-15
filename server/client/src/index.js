import React            from 'react';
import ReactDOM         from 'react-dom';
import { createStore }  from 'redux';
import { Provider }     from 'react-redux';
import reducers          from './reducers';
import App              from './components/App';


/* eslint-disable no-underscore-dangle */
const store = createStore(
 reducers, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>  ,
  document.getElementById('root')
)

// https://www.youtube.com/watch?v=UVQ0ATR0vpI - react router v4 23min tutorial

// Nice master detail design pattern from react training tam using react router
// https://reacttraining.com/react-router/

// in redux.org there is a great example on the most advanced example there for requiering two different files, depending on nvironment