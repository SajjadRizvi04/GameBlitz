import React from 'react'
import Map from './map/Map'
import { SupportedSports } from './supported sports/SupportedSports'
import Sports from './sports/Sports'
import Hero from './hero/Hero'
import How_It_Works from './how_it_works/How_It_Works'
import Footer from '../shared/footer/Footer'
import { Dashboard } from '../dashboard/Dashboard'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Map/>
        <Sports/>
        <How_It_Works />
        <Footer />
    </div>
  )
}

export default Home
