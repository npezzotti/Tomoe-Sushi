import React from 'react';
import logo from './logo.svg';
// import About from './components/About'
// import Contact from './components/Contact'
// import Hours from './components/Hours'
// import Location from './components/Location'
// import Menu from './components/Menu'
// import Ratings from './components/Ratings'
// import Map from './components/Map'
import Gallery from './components/Gallery'


import './App.css';
import ReactMapGL from 'react-map-gl';

function App() {
  return (
    <div className="App">
        {/* <About/>
        <Contact/>
        <Hours/>
        <Location/>
        <Menu/>
        <Ratings/>
        <Map /> */}
        <Gallery />

    </div>
  );
}

export default App;
