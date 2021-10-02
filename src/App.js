import React, { useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './screens/HomePage';
import Header from './components/layout/header/Header';
import FavPage from './screens/FavPage';
import { useSelector, useDispatch } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { initFav } from './store/favorite/actions';
import { geoApi, setChosenCity } from './store/weather/actions';
import PageNotFound from './screens/PageNotFound';

function App() {
  const settings = useSelector(state => state.settingsReducer);
  const weather = useSelector(state => state.weatherReducer);
  const dispatch = useDispatch();

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: settings.darkMode ? 'dark' : 'light',
        },
      }),
    [settings.darkMode],
  );

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(getCooridors);
    else {
      dispatch(setChosenCity(weather.currentCityKey, weather.currentCityName))
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
