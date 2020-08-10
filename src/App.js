import React, { useMemo } from 'react';
import './App.css';

import HomePage from './screens/HomePage';
import Header from './components/layout/header/Header';
import FavPage from './screens/FavPage';

import { useSelector, useDispatch } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

function App() {
  const settings = useSelector(state => state.settingsReducer);
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
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="App">
          <Header />
          <HomePage />
          <FavPage />
        </div>
      </Paper>
    </ThemeProvider>

  );
}

export default App;
