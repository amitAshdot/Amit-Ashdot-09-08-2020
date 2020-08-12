import React, { useMemo, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './screens/HomePage';
import Header from './components/layout/header/Header';
import FavPage from './screens/FavPage';

import { useSelector, useDispatch } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Loader from './components/ui/Loader';
import { initFav } from './store/favorite/actions';
import { geoApi } from './store/weather/actions';
import PageNotFound from './screens/PageNotFound';

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
    let test = ''
    if (navigator.geolocation) {
      test = navigator.geolocation.getCurrentPosition(getCooridors);
    } else {
    }
    dispatch(initFav)
  }, [])

  const getCooridors = (position) => {
    dispatch(geoApi(position.coords.latitude, position.coords.longitude))
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Paper>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/favorites" component={FavPage} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Paper>
      </ThemeProvider>
    </Router>




  );
}

export default App;
