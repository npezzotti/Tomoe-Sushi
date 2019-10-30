import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';


const Map = () => {

const viewPortWidth = () => {
    if(window.innerWidth < 700){
    return window.innerWidth*.8
    }return window.innerWidth*.45

}
const viewPortHeight = () => {
    if(window.innerWidth < 700){
    return window.innerHeight*.35
    }return window.innerHeight*.5

}
const viewPortZoom = () => {
  if(window.innerWidth < 700){
  return 14
  }return 15

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
				pitch={45}
                mapStyle="mapbox://styles/bartconsedine/ck2aiog9s37ca1co3xfzyjx63"
                mapboxApiAccessToken='pk.eyJ1IjoiYmFydGNvbnNlZGluZSIsImEiOiJjazBudWVxajUwMXdlM2hwZzFzcDQ5cWR5In0.376OjUpSFMy-y-PVfAeO9A'
                
                onViewportChange={_onViewportChange}
                dragPan={false}
            >

                <Marker    
                        className="markers" 
                        key="map" 
                        latitude={40.724}
                        longitude={-74.0032}
                        offsetLeft={-10} offsetTop={-50}
						>
                    <div  >
                                            
                      <img height="50px" alt="pin" src={`/cropped_images/pin.png`}/>
                    </div>
                </Marker>
      </ReactMapGL>
    </div>
  );
}

export default Map;
