import React from 'react'
import maps from '/map.png'
import './Location.css'

const Location = () => {
  return (
    <div>
      <h2 className='location-heading transition hover:scale-105'>Location</h2>
      <img src={maps} alt='A map' className='location-img'></img>
    </div>
  )
}

export default Location