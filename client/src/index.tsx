import './style/index.css';
import App from './components/app';
import { h } from 'preact';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
