// react
import React from 'react';

// styling
import './App.css';
import ReactMapGL from 'react-map-gl';

// components
import Map from './components/Map'
import Menu from './components/Menu';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Nav from './components/Nav';
import PressReviews from './components/PressReviews';

export default function App() {
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