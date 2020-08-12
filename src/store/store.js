
import weatherReducer from './weather/reducer';
import settingsReducer from './settings/reducer';
import favoriteReducer from './favorite/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    weatherReducer: weatherReducer,
    settingsReducer: settingsReducer,
    favoriteReducer: favoriteReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

