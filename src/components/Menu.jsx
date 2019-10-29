// react
import React, { useState } from 'react';

// components
import Dessert from './Menus/Dessert.jsx'
import Drinks from './Menus/Drinks.jsx'
import Kitchen from './Menus/Kitchen.jsx'
import Lunch from './Menus/Lunch.jsx'
import Sushi from './Menus/Sushi.jsx'

export default function Menu() {
    const [menu, changeMenu] = useState(null)
    const menus = [
        {
            title: "LUNCH",
            img: "/menu_images/Lunch.jpg"
        },
        {
            title: "SUSHI-BAR",
            img: "/menu_images/SushiBar.jpg"
        },
        {
            title: "KITCHEN",
            img: "/menu_images/Kitchen.jpg"
        },
        {
            title: "DESSERT",
            img: "/menu_images/Dessert.jpg"
        },
        {
            title: "DRINKS",
            img: "/menu_images/Drinks.jpg"
        }
    ]
    return(
        <div><div className="menu-title-container"><h1 className="menu-list-title" id='menu'>Menu:</h1></div>
        <div className="menu-container">
            
            <div className="menu-list">
                {menus.map(item => {
                    return(
                        <div className="menu" onClick={() => {
                            changeMenu(item.title)
                            }}>
                            <h2 className="menu-title">{item.title}</h2>
                            <img className="menu-image" src={item.img} alt={item.title} />
                        </div>)
                })}
            </div>
            <div className="menu-content">
                {menu==="DESSERT" && <Dessert changeMenu={changeMenu}/>}
                {menu==="LUNCH" && <Lunch changeMenu={changeMenu}/>}
                {menu==="SUSHI-BAR" && <Sushi changeMenu={changeMenu}/>}
                {menu==="KITCHEN" && <Kitchen changeMenu={changeMenu}/>}
                {menu==="DRINKS" && <Drinks changeMenu={changeMenu}/>}
            </div>
        </div>
        </div>
    )
}
