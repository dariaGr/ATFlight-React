import React from 'react'
import '../../../styles/index/main/main.css'
import Aside from './aside/Aside.jsx'
import FlightByRouteCharterRent from './section/Flight-by-route__charter-rent.jsx'

const Main = function () {
  return (
    <main className='main'>
      <div className='wrapper _main'>
        <Aside />
        <section className='main__section'>
          <FlightByRouteCharterRent />
        </section>
      </div>
    </main>
  )
}

export default Main
