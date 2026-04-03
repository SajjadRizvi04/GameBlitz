import {react, useRef, useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import {motion} from 'framer-motion'
// import {useScroll, useTransform} from 'framer-motion'
import "./How_It_Works.css"

const STEPS = [
    {
        id: 1,
        title: "Join Community",
        desc: "Login with your email id or be invited.",
    },
    {
        id: 2,
        title: "Join Teams",
        desc: "Join a team or create your own team.",
    },
    {
        id: 3,
        title: "Find Games",
        desc: "Browse and find games near you.",
    },
    {
        id: 4,
        title: "Compete",
        desc: "Send invites and Accept requests and compete."
    }
]

const HOW_IT_WORKS_CARDS = () => {
    return (<>   
        {STEPS.map((step) => {
            return <div className="htw-card" key={step.id}>
                <div className="htw-card-num">
                    {step.id}
                </div>
                <div className="htw-card-content">
                    <div className="htw-card-title">
                        <h3>{step.title}</h3>
                    </div>
                    <div className="htw-card-desc">
                        <p>{step.desc}</p>
                    </div>
                </div>
                
            </div>
        })}
        </>)
}

function How_It_Works(){
    return <div className="how_it_works">
        <div className="htw-container">
            <div className="htw-title">
                <h1><span className="colored-text">How</span> It Works</h1>
            </div>
            <div className="htw-cards">
                <HOW_IT_WORKS_CARDS />
            </div>
            <br />
            <div className="colored-bg">
                <p className="htw-desc">
                    GameBlitz is a local sports community platform that connects players and teams, making it effortless to find games, join teams, and compete in your area.
                </p>
            </div>
        </div>
    </div>
}


export default How_It_Works;