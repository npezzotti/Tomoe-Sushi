import React from 'react'
import hero from '../assets/images/Hero.jpg'

export default function Header(){
    return(
        <div className="header" id='header'>
            <img src={hero} alt="hero" className="mask"></img>
        </div>
    )
}