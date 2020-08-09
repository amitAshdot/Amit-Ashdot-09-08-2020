import React from 'react';
import './App.css';

import HomePage from './screens/HomePage';
import Header from './components/layout/header/Header';
import FavPage from './screens/FavPage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <FavPage />
    </div>
  );
}

export default App;
