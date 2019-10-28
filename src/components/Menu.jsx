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
            img: "../../assets/images/Lunch.jpg"
        },
        {
            title: "SUSHI-BAR",
            img: "../assets/images/SushiBar.jpg"
        },
        {
            title: "KITCHEN",
            img: "../assets/images/Kitchen.jpg"
        },
        {
            title: "DESSERT",
            img: "../assets/images/Dessert.jpg"
        },
        {
            title: "DRINKS",
            img: "../assets/images/Drinks.jpg"
        }
    ]
    return(
        <div>
            <h1 className="menu-list-title" id='menu'>Menu:</h1>
            <div className="menu-list">
                {menus.map(item => {
                    return(
                        <div className="menu" onClick={() => changeMenu(item.title)}>
                            <h2 className="menu-title">{item.title}</h2>
                            <img className="menu-image" src={item.img} alt={item.title} />
                        </div>)
                })}
            </div>
            <div className="menu-content">
                {menu==="DESSERT" && <Dessert />}
                {menu==="LUNCH" && <Lunch />}
                {menu==="SUSHI-BAR" && <Sushi />}
                {menu==="KITCHEN" && <Kitchen />}
                {menu==="DRINKS" && <Drinks />}
            </div>
        </div>
    )
}
