import React from 'react'
import '../css/MyProject.css'
import project from '../assets/project.png'
import { AiFillGithub } from "react-icons/ai";
import { RiLinksLine } from "react-icons/ri";

const MyProject = () => {
  return (
    <div className="myproject-container">
        <div className="myproject-title">
            <h1>Personal <span>Project</span></h1>
        </div>
        <div className="myproject-box">
            <div className="myproject-image">
                <img src={project} alt="" className='image' />
                <div className="overlay">
                    <a href='' className='icon'><AiFillGithub size="30" /></a>
                    <a href='' className='icon'><RiLinksLine size="30" /></a>
                </div>
            </div>
            <div className="myproject-image">
                <img src={project} alt="" className='image' />
                <div className="overlay">
                    <a href='' className='icon'><AiFillGithub size="30" /></a>
                    <a href='' className='icon'><RiLinksLine size="30" /></a>
                </div>
            </div>
            <div className="myproject-image">
            <img src={project} alt="" className='image' />
                <div className="overlay">
                    <a href='' className='icon'><AiFillGithub size="30" /></a>
                    <a href='' className='icon'><RiLinksLine size="30" /></a>
                </div>
            </div>
            <div className="myproject-image">
            <img src={project} alt="" className='image' />
                <div className="overlay">
                    <a href='' className='icon'><AiFillGithub size="30" /></a>
                    <a href='' className='icon'><RiLinksLine size="30" /></a>
                </div>
            </div>
            <div className="myproject-image">
            <img src={project} alt="" className='image' />
                <div className="overlay">
                    <a href='' className='icon'><AiFillGithub size="30" /></a>
                    <a href='' className='icon'><RiLinksLine size="30" /></a>
                </div>
            </div>
            <div className="myproject-image">
            <img src={project} alt="" className='image' />
                <div className="overlay">
                    <a href='' className='icon'><AiFillGithub size="30" /></a>
                    <a href='' className='icon'><RiLinksLine size="30" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProject