import React from 'react'
import json from './menu'


const menu = json

export default function Lunch(props){
    return(
        <div className="menu-container" style={{color: "white"}}>
        <div className="close-button" onClick={() => props.changeMenu(null)}>&times;</div>
            <h3 className="menu-category">Lunch Special from Sushi Bar</h3>
            {menu[1].Lunch[0].Lunch_Special_from_Sushi_Bar.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <span className="menu-item">{`${menuItem.item}-`}</span>
                            <span className="description">{menuItem.description}</span>
                            <span className="price">{menuItem.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}