// react
import React from 'react';

// functions
import {buildMenuInfoContainer} from './menuFxns.jsx'

// modules
import json from './menu';
const menu = json

export default function Lunch(props){
    return(
        <div className="menu-container" style={{color: "white"}}>
        <div className="close-button" onClick={() => props.changeMenu(null)}>&times;</div>
            <h3 className="menu-category">Lunch Special from Sushi Bar</h3>
            {menu[1].Lunch[0].Lunch_Special_from_Sushi_Bar.map(menuItem => {
                return(
                    <>{buildMenuInfoContainer(menuItem)}</>
                )
            })}
        </div>
    )
}