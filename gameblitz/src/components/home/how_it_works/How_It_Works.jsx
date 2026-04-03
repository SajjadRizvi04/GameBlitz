import {react, useRef, useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import {motion} from 'framer-motion'
// import {useScroll, useTransform} from 'framer-motion'
import "./How_It_Works.css"

function How_It_Works(){
    return <div className="how_it_works">
        <div className="htw-title">
            <h1>How It Works</h1>
            <div className="colored-bg">
                <p className="htw-desc">
                    GameBlitz is a local sports community platform that connects players and teams, making it effortless to find games, join teams, and compete in your area.
                </p>
            </div>
        </div>
        <div className="htw-cards">
            <div className="htw-card">
                <div className="htw-card-img">
                    <img src="/find-match.png" alt="" />
                </div>
                <div className="htw-card-title">
                    <h3>Find Matches</h3>
                </div>
                <div className="htw-card-desc">
                    <p>Search for games and teams in your area.</p>
                </div>
            </div>
            <div className="htw-card">
                <div className="htw-card-img">
                    <img src="/join-team.png" alt="" />
                </div>
                <div className="htw-card-title">
                    <h3>Join a Team</h3>
                </div>
                <div className="htw-card-desc">
                    <p>Join a team and start playing.</p>
                </div>
            </div>
            <div className="htw-card">
                <div className="htw-card-img">
                    <img src="/compete.png" alt="" />
                </div>
                <div className="htw-card-title">
                    <h3>Compete</h3>
                </div>
                <div className="htw-card-desc">
                    <p>Compete against other teams and win prizes.</p>
                </div>
            </div>
        </div>
    </div>
}


export default How_It_Works;