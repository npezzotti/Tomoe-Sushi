import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

const Map = () => {

const viewPortWidth = () => {
    if(window.innerWidth < 700){
    	return window.innerWidth*.5
    } else {return window.innerWidth*.4}
}

const viewPortHeight = () => {
    if(window.innerWidth < 700){
    	return window.innerHeight*.5
	} else {return window.innerHeight*.5}
	// return window.innerWidth < 700 ?
}

const viewPortZoom = () => {
	if(window.innerWidth < 700){
		return 10
	} else {return 15}
}

const [viewport, setViewport] = useState({
	width:viewPortWidth(),
	height:viewPortHeight(),
	latitude:  40.724577,
	longitude: -74.002860,
	zoom:viewPortZoom()
});

const changeViewPort = () =>{
  	const newport = {
		...viewport,
		width:viewPortWidth(),
		height:viewPortHeight(),
  	}
  	setViewport(newport)
}

useEffect(() => {
  	window.addEventListener("resize", changeViewPort)
}, []);

const _onViewportChange = viewport => {
  	setViewport(viewport)
}

return (
    <div className="App">
     	<ReactMapGL
			width={viewport.width}
			height={viewport.height}
			latitude={viewport.latitude}
			longitude={viewport.longitude}
			zoom={viewport.zoom}
			mapboxApiAccessToken='pk.eyJ1IjoiYmFydGNvbnNlZGluZSIsImEiOiJjazBudWVxajUwMXdlM2hwZzFzcDQ5cWR5In0.376OjUpSFMy-y-PVfAeO9A'
			onViewportChange={_onViewportChange}
		>
			<Marker
				className="markers"
				key="map"
				latitude={40.724577}
				longitude={-74.002860}
				offsetLeft={-20} offsetTop={-10}
			>
				<div>
					<h1>PIN</h1>
				</div>
			</Marker>
      	</ReactMapGL>
    </div>
  );
}

export default Map;
