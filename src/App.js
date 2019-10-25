// react
import React from 'react';

// styling
import './App.css';

// components
import Menu from './components/menu/Menu';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Nav from './components/Nav';
import PressReviews from './components/PressReviews';

function App() {
  return (
    <div className="App">
      <Nav />
      <Menu />
      <Info />
      <Gallery />
      <PressReviews />
      <Contact />
    </div>
  );
}

export default App;
