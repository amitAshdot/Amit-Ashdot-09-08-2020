import React, { useMemo, useEffect } from 'react';
import './App.css';

import HomePage from './screens/HomePage';
import Header from './components/layout/header/Header';
import FavPage from './screens/FavPage';

import { useSelector, useDispatch } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Loader from './components/ui/Loader';
import { initFav } from './store/favorite/actions';

function App() {
  const settings = useSelector(state => state.settingsReducer);
  const weather = useSelector(state => state.weatherReducer);
  const favorite = useSelector(state => state.favoriteReducer);

  const dispatch = useDispatch();

  const prefersDarkMode = settings.darkMode;
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  useEffect(() => {
    dispatch(initFav)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="App">
          <Header />
          <HomePage />
          {!favorite.favCities ? <FavPage /> : null}
        </div>
      </Paper>
    </ThemeProvider>

  );
}

export default App;
