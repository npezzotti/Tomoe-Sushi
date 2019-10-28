import React from 'react'
import json from './menu'

const menu = json

export default function Lunch(){
    return(
        <div className="menu-container" style={{color: "white"}}>
            <h3 className="menu-category">Lunch Special from Sushi Bar</h3>
            {menu[1].Lunch[0].Lunch_Special_from_Sushi_Bar.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{menuItem.item}</div>
                            <div className="description">{menuItem.description}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}