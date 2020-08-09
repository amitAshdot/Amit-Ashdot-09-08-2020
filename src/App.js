import React from 'react';
import './App.css';

import HomePage from './components/layout/homePage/HomePage';
import Header from './components/layout/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
