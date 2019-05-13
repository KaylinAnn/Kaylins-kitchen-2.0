import React from 'react';
import './reset.css';
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      {Routes}
      <Nav />
    </div>
  );
}

export default App;
