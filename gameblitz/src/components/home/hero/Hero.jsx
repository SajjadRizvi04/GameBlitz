import {react, useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import {useScroll, useTransform} from 'framer-motion'
import bgImg from '/multi-sport.png'
import "./Hero.css"

function Hero() {
    return <div>
        <div className="hero-container">
            <di className="container">
                <div className="bg-overlay">
                    <img src={bgImg} loading="lazy" alt="" className="img-overlay" />
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Connect, Compete,  <br />
                        Dominate. Join Your  <br />
                        Local League Today!  <br />
                        </h1>
                    <p className="hero-para">
                        Find your team.
                        Play your game. <br />
                        Right here, right now.
                    </p>
                </div>
            </di>
        </div>
    </div>
}

export default Hero