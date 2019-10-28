import React from 'react'
import json from './menu'

const menu = json

export default function Sushi() {
    return(
        <div className="menu-container" style={{color: "white"}}>
            <h3 className="menu-category">Sushi Dinner</h3>
            {menu[2].Sushi_Bar[0].Sushi_Dinner.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{`${menuItem.item}-`}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
            <h3 className="menu-category">Regular Roll/Hand Roll a la Carte</h3>
            {menu[2].Sushi_Bar[1].Regular_Roll_Hand_Roll_a_la_Carte.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{`${menuItem.item}-`}</div>
                            <div className="description">{menuItem.description}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
            <h3 className="menu-category">Maki Dinner</h3>
            {menu[2].Sushi_Bar[2].Maki_Dinner.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{`${menuItem.item}-`}</div>
                            <div className="description">{menuItem.description}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
            <h3 className="menu-category">Sushi/Sashimi a la Carte</h3>
            {menu[2].Sushi_Bar[3].Sushi_Sashimi_a_la_Carte.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{`${menuItem.item}-`}</div>
                            <div className="description">{menuItem.description}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
            <h3 className="menu-category">Sashimi Dinner</h3>
            {menu[2].Sushi_Bar[4].Sashimi_Dinner.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{`${menuItem.item}-`}</div>
                            <div className="description">{menuItem.description}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}