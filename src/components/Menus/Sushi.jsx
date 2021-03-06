// react
import React from 'react';

// functions
import {buildMenuInfoContainer} from './menuFxns.jsx'

// modules
import json from './menu';
const menu = json

export default function Sushi(props) {
    return(
        <div className="menu-container" style={{color: "white"}}>
        <div className="close-button" onClick={() => props.changeMenu(null)}>&times;</div>
            <h3 className="menu-category">Sushi Dinner</h3>
            {menu[2].Sushi_Bar[0].Sushi_Dinner.map(menuItem => {
                return(
                    <>{buildMenuInfoContainer(menuItem)}</>
                )
            })}
            <h3 className="menu-category">Regular Roll/Hand Roll a la Carte</h3><p className="menu-category-sub-header">*Vegetable Roll</p>
            {menu[2].Sushi_Bar[1].Regular_Roll_Hand_Roll_a_la_Carte.map(menuItem => {
                return(
                    <>{buildMenuInfoContainer(menuItem)}</>
                )
            })}
            <h3 className="menu-category">Maki Dinner</h3>
            {menu[2].Sushi_Bar[2].Maki_Dinner.map(menuItem => {
                return(
                    <>{buildMenuInfoContainer(menuItem)}</>
                )
            })}
            <h3 className="menu-category">Sushi/Sashimi a la Carte</h3>
            {menu[2].Sushi_Bar[3].Sushi_Sashimi_a_la_Carte.map(menuItem => {
                return(
                    <>{buildMenuInfoContainer(menuItem)}</>
                )
            })}
            <h3 className="menu-category">Sashimi Dinner</h3>
            {menu[2].Sushi_Bar[4].Sashimi_Dinner.map(menuItem => {
                return(
                    <>{buildMenuInfoContainer(menuItem)}</>
                )
            })}
        </div>
    )
}