import React, { useState } from 'react';
import './reset.css';
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Routes from './Routes'

function App() {
  const [location, setLocation] = useState()

  return (
    <div className="App">
      {Routes}
      <Nav />
    </div>
  );
}

export default App;
