import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import weatherReducer from './store/weather/reducer';
import settingsReducer from './store/settings/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import './sass/main.scss';

const rootReducer = combineReducers({
  weatherReducer: weatherReducer,
  settingsReducer: settingsReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
