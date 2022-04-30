import React from "react";
import "../../../styles/index/menu/flight-by-route.css";
import PositionIcon from "../../../images/index/menu/flight-by-route/position.svg";
import ChartIcon from "../../../images/index/menu/flight-by-route/chart.svg";
import CalendarIcon from "../../../images/index/menu/flight-by-route/calendar.svg";
import ChangeIcon from "../../../images/index/menu/flight-by-route/change.svg";
import SettingsIcon from "../../../images/index/menu/flight-by-route/settings.svg";
import MagnifyingGlass from "../../../images/index/menu/flight-by-route/magnifying-glass.svg";

const FlightByRoute = function () {
  return(
    <form className="flight-by-route flight-by-route_active">
      <div className="flight-by-route__radio">
        <div className="flight-by-route__radio-item">
        <input id="charter-rent" type="radio" name="choice"/><label>Charter Rent</label>
        </div>
        <div className="flight-by-route__radio-item">
        <input id="seat-ticket" type="radio" name="choice"/><label>Seat Ticket</label>
        </div>
      </div>
      <div className="flight-by-route__location-from">
        <input id="location-from-input" placeholder="Location From..."/>
        <button className="flight-by-route__position-button" 
          id="location-from-position">
          <img src={PositionIcon}/>        
        </button>
        <button className="flight-by-route__chart-button"
          id="location-from-chart">
            <img src={ChartIcon}/>
        </button>
        <input id="rent-dates-input" placeholder="Rent Dates"/>
        <button className="flight-by-route__calendar"
          id="location-from-calendar">
          <img src={CalendarIcon}/>
        </button>
        <select className="flight-by-route__selection"
          id="plane-type-selection">
            <option>Plane Type</option>
            <option>Plane Type</option>
            <option>Plane Type</option>
        </select>
      </div>
      <button id="change-locations">
        <img src={ChangeIcon}/>
      </button>
      <div className="flight-by-route__location-to">
        <input id="location-to-input" placeholder="Location To..."/>
          <button className="flight-by-route__position-button" 
            id="location-to-position">
            <img src={PositionIcon}/>        
          </button>
          <button className="flight-by-route__chart-button"
            id="location-to-chart">
            <img src={ChartIcon}/>
          </button>
          <select className="flight-by-route__selection"
            id="way-type-selection">
            <option>One Way</option>
            <option>Two Way</option>
          </select>
        
      </div>
      <div className="flight-by-route__footer">
        <button id="show-more-filters">
          <img src={SettingsIcon}/>
          <span>Show More Filters</span>
        </button>
        <button id="flight-by-route__search">
          <img src={MagnifyingGlass}/>
          <span>Search</span>
        </button>
      </div>
    </form>
  )
}


export default FlightByRoute