import React from 'react'
import '../css/HeroSection.css';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section>
        <div className="hero-section">
            <div className="hero-section-text">
                <h1>Hello, It's me</h1>
                <h2>Alfin Nugraha</h2>
                <h3>I am a <span><TypeAnimation
                sequence={[
                    'Fullstack Developer', // Types 'One'
                    1000, // Waits 1s
                    'Learner', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    () => {
                    console.log('Sequence completed');
                    },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}/></span></h3>
                <div className="hero-section-icon">
                    <a href='' className='icon'><AiFillGithub size="30" /></a>
                    <a href='' className='icon'><BsDiscord size="30" /></a>
                    <a href='' className='icon'><FaInstagram size="30" /></a>
                </div>
                <a className='btnContact' href="#contact">Contact Me</a>
            </div>
        </div>
    </section>
  )
}

export default HeroSection