import React from 'react'

export default function Nav(){
    let time = `10:00PM`
    return(
        <div className="nav">
            <div className='nav-time Open-Until-1000PM'>Open Until {time}</div>
            <div className='nav-item-container'>
                <a className='nav-item menu' href='#menu'>Menu</a>
                <a className='nav-item info' href='#info'>Info</a>
                <a className='nav-item center Tomoe-Sushi ' href='#home'>TOMOE SUSHI</a>
                <a className='nav-item Gallery' href='#gallery'>Gallery</a>
                <a className='nav-item PRESS' href='#press'>Press</a>
            </div>
        </div>
    )
}