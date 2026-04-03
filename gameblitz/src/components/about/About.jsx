import React from 'react'
import imgBg from "/multi-sport.png"
import { FaUser, FaMapMarkerAlt, FaFutbol,FaArrowRight } from "react-icons/fa";
 
import './About.css';
import Footer from '../shared/footer/Footer'
import OrangeButton from '../shared/OrangeButton';
import NormalButton from '../shared/NormalButton';

const ICONS = [
  {
    id: 1,
    label: 'whatsapp',
    icon: 
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.843L.057 23.57a.5.5 0 0 0 .611.611l5.76-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.519-5.228-1.423l-.374-.223-3.882.998 1.013-3.795-.244-.389A9.945 9.945 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  },
  {
    id: 2,
    label: 'instagram',
    icon:
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  },
  {
    id: 3,
    label: 'facebook',
    icon:
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  },
  {
    id: 4,
    label: 'tiktok',
    icon: 
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 2H15.5C15.5 4.2 17.3 6 19.5 6V9C18.1 9 16.8 8.6 15.7 7.9V14.3C15.7 17.4 13.2 20 10 20C6.8 20 4.3 17.4 4.3 14.3C4.3 11.2 6.8 8.6 10 8.6V11.6C8.7 11.6 7.6 12.7 7.6 14.1C7.6 15.5 8.7 16.6 10 16.6C11.3 16.6 12.4 15.5 12.4 14.1V2H12.5Z"/>
    </svg>
  }
]

const SOCIALS = {
  whatsapp: 'https://www.whatsapp.com/917347353880',
  instagram: 'https://www.instagram.com/sajjadali',
  facebook: 'https://www.facebook.com/pritamsinhaa',
  tiktok: 'https://www.tiktok.com/@thomasanesukazonda'
}

const OUR_TEAM = [
  {
    id: 1,
    name: 'Pritam Sinha',
    role: 'Founder & CEO',
    description: 'Visionary leader driving the sports community platform with passion for connecting athletes and teams across regions.'
  },
  {
    id: 2,
    name: 'Justin W Chada',
    role: 'CTO',
    description: 'Tech innovator building scalable solutions to power seamless team management and competitive gaming experiences.'
  },
  {
    id: 3,
    name: 'Thomas Kazonda',
    role: 'Head of Operations',
    description: 'Operations expert ensuring smooth execution and strategic growth of GameBlitz across all markets.'
  },
  {
    id: 4,
    name: 'Sajjad Ali',
    role: 'Product Lead',
    description: 'Product strategist focused on creating intuitive experiences that athletes and teams love.'
  },
]

function AboutUs() {
  /*check main container hero classname, fix the code*/
  return (
    <div>
      <div className="about-hero">
        <div className="img-overlay">
          <img src={imgBg} alt="" className="hero-img" />
        </div>
        
        <div className="text-container">
          <h1>About GameBlitz</h1>
          <p>GameBlitz is revolutionizing how local athletes discover, organize, and compete in sports. We connect passionate players and teams, making it effortless to find opponents, schedule matches, and build thriving sports communities.</p>
          <div className="hero-stats">
            <div className="stat">
              <h4>500+</h4>
              <p>Active Teams</p>
            </div>
            <div className="stat">
              <h4>1000+</h4>
              <p>Athletes</p>
            </div>
            <div className="stat">
              <h4>50+</h4>
              <p>Locations</p>
            </div>
          </div>
          <div className="hero-cta">
            <OrangeButton content={"Join the Game"} />
            <NormalButton content={"Learn More"} />
          </div>
          
        </div>
      </div>
      <div className="about-section">
        <div className="about-us">
          <div className="who-we-are">
            <h1>Our Story & Journey</h1>
            <p>Here we will need to write a lot of text describing who we are and what our organisation actually do. let us  make it a bit longer so that it fills up the entire screen height if someone scrolls into it. And also we are not going to put too many things in the about page just the story, team members and maybe some goals, missions and aims that we want to achieve through this organisation. And let us make sure that we will win this hackathon thing through our project. I think the text is long enough for testing purposes.</p>
            <div className="about-icons">
              {ICONS.map((icon) => (
                <a 
                  className={`about-icon ${icon.label}`}
                  key={icon.id} 
                  href={SOCIALS[icon.label]} 
                  target="_blank"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="quote-box">
            <span className="quote-mark">"</span>
            <p>
              Sports bring people together. We're here to make that connection effortless, meaningful, and accessible to every athlete in your community.
            </p>
            <span className="quote-author">— GameBlitz Team</span>
          </div>
        </div>
        <div className="about-statistics">
          <div className="stats">
            <h1 className="stats-title">5+</h1>
            <span className="stats-description">Years Active</span>
          </div>
          <div className="stats">
            <h1 className="stats-title">500</h1>
            <span className="stats-description">Teams</span>
          </div>
          <div className="stats">
            <h1 className="stats-title">1000</h1>
            <span className="stats-description">Participants</span>
          </div>
          <div className="stats">
            <h1 className="stats-title">50+</h1>
            <span className="stats-description">Cities</span>
          </div>
        </div>
        <div className="where-we-are-going-section">
          <h1>Our Vision & Goals</h1>
          <div className="where-we-are-going">
            <div className="wwg-card">
              <div className="wwg-card-img">
                <img src={imgBg} alt="Global Expansion" />
              </div>
              <div className="wwg-card-text">
                <h2>Global Expansion</h2>
                <p>Bringing GameBlitz to sports communities across continents, connecting athletes worldwide.</p>
              </div>
            </div>
            <div className="wwg-card">
              <div className="wwg-card-img">
                <img src={imgBg} alt="Advanced Analytics" />
              </div>
              <div className="wwg-card-text">
                <h2>Advanced Analytics</h2>
                <p>Empower players with detailed performance insights and competitive metrics for growth.</p>
              </div>
            </div>
             <div className="wwg-card">
              <div className="wwg-card-img">
                <img src={imgBg} alt="Community Tournaments" />
              </div>
              <div className="wwg-card-text">
                <h2>Championship League</h2>
                <p>Organize and host prestigious tournaments that celebrate talent and inspire excellence.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-team">
          <h1>Meet the Team</h1>
          <div className="our-team-container">
            {OUR_TEAM.map((member, index) => (
              <div key={index} className="our-team-card">
                <div className="our-team-profile">
                  <span className="our-team-profile-initials">{member.name.split(' ').map(n => n[0]).join('').toUpperCase()}</span>
                </div>
                <div className="our-team-card-text">
                  <h2>{member.name}</h2>
                  <p className="member-role">{member.role}</p>
                  <p className="member-desc">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
