import React from 'react'

export default function Nav(){
    let time = `10:00PM`
    return(
        <div className="nav">
            <div className='nav-time'>
            <div className='nav-item-container'>
                <a className='nav-item' href='#menu'>Menu</a>
                <a className='nav-item' href='#info'>Info</a>
                <a className='nav-item center' href='#home'>TOMOE SUSHI</a>
                <a className='nav-item' href='#gallery'>Gallery</a>
                <a className='nav-item' href='#press'>Press</a>
                <p>Open Until {time}</p>
            </div>
            </div>
        </div>
    )
}