// react
import React from 'react';

// functions
import {buildMenuInfoContainer} from './menuFxns.jsx'

// modules
import json from './menu';
const menu = json

export default function Drinks(props){
    return(
        <div className="menu-container" style={{color: "white"}}>
        <div className="close-button" onClick={() => props.changeMenu(null)}>&times;</div>
            <h3 className="menu-category">Soda/Juice</h3>
        {
            menu[4].Drinks[0].Soda_Juice.map(menuItem => {
                return(
                    <>{buildMenuInfoContainer(menuItem)}</>
                )
            })
        }
            <h3 className="menu-category">Beer</h3>
            {menu[4].Drinks[1].Beer.map(menuItem => {
                return(
                    <>{buildMenuInfoContainer(menuItem)}</>
                )
            })}
            <h3 className="menu-category">Sake</h3>
            {menu[4].Drinks[2].Sake.map(menuItem => {
                return(
                    <>{buildMenuInfoContainer(menuItem)}</>
                )
            })}
            <h3 className="menu-category">Wine</h3>
            {menu[4].Drinks[3].Wine.map(menuItem => {
                return(
                    <>{buildMenuInfoContainer(menuItem)}</>
                )
            })}
        </div>
    )
}