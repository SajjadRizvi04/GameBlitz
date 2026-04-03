import React from 'react'
import Map from './map/Map'
import { SupportedSports } from './supported sports/SupportedSports'
import Sports from './sports/Sports'
import { Dashboard } from '../dashboard/Dashboard'



const Home = () => {
  return (
    <div>
      <Map/>
      <Sports/>
      
    </div>
  )
}

export default Home
