// react
import React, {useState} from 'react';

// styling
import './App.css';
// import ReactMapGL from 'react-map-gl';

// components
import Map from './components/Map'
import Header from './components/Header.jsx'
import Menu from './components/Menu';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Nav from './components/Nav';
import PressReviews from './components/PressReviews';

const dateToStr = (dt) => {
  let hours = dt.getHours();
  let minutes = dt.getMinutes();
  let seconds = dt.getSeconds();
  hours   = hours === 0  ? 12           : hours;
  hours   = hours   > 12 ? hours - 12   : hours;
  minutes = minutes < 10 ? `0${minutes}`: minutes;
  seconds = seconds < 10 ? `0${seconds}`: seconds;
  let dtStr = `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getYear() + 1900} ${hours}:${minutes}:${seconds}`
  return dtStr
}

export default function App() {
  let [currentTime, setCurrentTime] = useState(dateToStr(new Date()))
  let [timeDiff, setTimeDiff] = useState(``);
  return (
    <div className="App">
      <Nav timeDiff={timeDiff} />
      <Header />
      <Menu />
      <Info dt={{setTimeDiff}} />
      <Gallery />
      <PressReviews />
      <Contact />
      <Map />
    </div>
  );
}
