import React from 'react'

export default function Nav({timeDiff}){
    
    let time = `10:00PM`
    return(
        <div>
            <p className="open-until">{timeDiff}</p>
            <div className='nav-item-container'>
                <a className='nav-item' href='#menu'>Menu</a>
                <a className='nav-item' href='#info'>Info</a>
                <a className='nav-item center' href='#home'>TOMOE SUSHI</a>
                <a className='nav-item' href='#gallery'>Gallery</a>
                <a className='nav-item' href='#press'>Press</a>
             </div>   
        </div>
    )
}