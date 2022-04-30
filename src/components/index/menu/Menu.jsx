import React from "react";
import "../../../styles/index/menu/menu.css";
import FlightByRoute from "./Flight-by-route.jsx"
import RentByTime from "./Rent-by-time.jsx"
import SearchCrew from "./Search-crew"

const Menu = function() {
  return(
    <div className="menu">
      <div className="wrapper _menu">
        <div className="menu__content">
          <div className="menu__window">
            <div className="menu__header">
              <a className="menu__header-link menu__header-link_active">Flight By Route</a>
              <a className="menu__header-link">Rent By Time</a>
              <a className="menu__header-link">Search Crew</a>
            </div>
            <div className="menu__body">
              <FlightByRoute/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Menu