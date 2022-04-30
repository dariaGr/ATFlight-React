import React, { useState } from 'react'
import Seat from '../../../../images/index/main/section/Flight-by-route__plane/seat.svg'
import Speed from '../../../../images/index/main/section/Flight-by-route__plane/speed.svg'
import Range from '../../../../images/index/main/section/Flight-by-route__plane/range.svg'
import PaperPlane from '../../../../images/index/main/section/Flight-by-route__plane/paper-plane.svg'

const Plane = props => {
  return props.planes.map(plane => {
    return (
      <div key={plane.id} className='flight-by-route__plane'>
        <div className='flight-by-route__plane-photo'>
          <img src={plane.cardPhoto} />
          <span>{plane.price}$</span>
        </div>
        <div className='flight-by-route__plane-text'>
          <h2 className='flight-by-route__plane-name'>{plane.name}</h2>
          <h4 className='flight-by-route__plane-crew'>
            {plane.crewNumber == 'No crew'
              ? 'No crew'
              : 'x' + plane.crewNumber + 'Crew:' + plane.crew}
          </h4>
        </div>
        <div className='flight-by-route__plane-tags'>
          <a className='flight-by-route__plane-tag flight-by-route__plane-tag_active'>
            <img src={PaperPlane} />
            {plane.type}
          </a>
          <a className='flight-by-route__plane-tag'>
            <img src={Seat} />x{plane.seatsNumber}
          </a>
          <a className='flight-by-route__plane-tag'>{plane.buildYear} Year</a>
          <a className='flight-by-route__plane-tag'>
            <img src={Speed} />
            {plane.speed} km/h
          </a>
          <a className='flight-by-route__plane-tag'>
            <img src={Range} />
            {plane.maxRange} km/h
          </a>
        </div>
      </div>
    )
  })
}

export default Plane
