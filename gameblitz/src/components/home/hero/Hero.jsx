import {react, useRef, useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import {motion} from 'framer-motion'
// import {useScroll, useTransform} from 'framer-motion'
import OrangeButton from '../../shared/Orangebutton'
import NormalButton from '../../shared/NormalButton'
import bgImg from '/multi-sport.png'
import "./Hero.css"

function Hero() {
    return <div className="hero">
        <div className="hero-container">
                <div className="bg-overlay">
                    <img src={bgImg} loading="lazy" alt="" className="img-overlay" />
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="colored-text">Connect,</span> Compete, <br></br> Dominate. Join Your <br /> Local Gaming Community Today!
                    </h1>
                    <p className="hero-para">
                        Welcome to GameBlitz, the ultimate destination for teams to connect, compete, and dominate.
                        Join our vibrant community and level up your playing experience today!
                    </p>
                   <OrangeButton text="Get Started"></OrangeButton>
                   {/* If needed i will uncomment */}
                   {/* <NormalButton content="Learn More"></NormalButton> */}
                </div>
        </div>
        </div>
    
}

export default Hero