import React from 'react'
import json from './menu'
// import { Icon } from '@opuscapita/react-icons';


const menu = json

export default function Drinks(props){
    return(
        <div className="menu-container" style={{color: "white"}}>
        {/* <Icon className="remove-button" type="indicator" name="remove" onClick={props.changeMenu}/> */}
        <h3 className="menu-category">Soda/Juice</h3>
        {
            menu[4].Drinks[0].Soda_Juice.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{menuItem.item}</div>
                            <div className="description">{menuItem.description}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })
        }
            <h3 className="menu-category">Beer</h3>
            {menu[4].Drinks[1].Beer.map(menuItem => {
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
            <h3 className="menu-category">Sake</h3>
            {menu[4].Drinks[2].Sake.map(menuItem => {
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
            <h3 className="menu-category">Wine</h3>
            {menu[4].Drinks[3].Wine.map(menuItem => {
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