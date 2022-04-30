import React from "react";
import '../../../../styles/index/main/aside/map.css';
import MapPlaceholder from '../../../../images/index/main/aside/map/map.jpg';


const Map = function(){
  return(
    <div className="aside__map">
      <h1 className="aside__map-title">Map View</h1>
      <div className="aside__map-item">
       <img src={MapPlaceholder}/>   
      </div>
    </div>
  )
}

export default Map;