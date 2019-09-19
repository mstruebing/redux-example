import React from 'react';
import {render} from 'react-dom';
import Counter from './Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import createReducer from './reducer';

const initialState = {
  count: 0,
};

const reducer = createReducer(initialState);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <Counter />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
