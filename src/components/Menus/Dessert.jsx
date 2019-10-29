import React from 'react';
import {  } from "module";
import json from './menu';

const menu = json

export default function Dessert(props){
    return(
        <div className="menu-container" style={{color: "white"}}>
        <div className="close-button" onClick={() => props.changeMenu(null)}>&times;</div>
            <h3 className="menu-category">Dessert</h3>
            {menu[0].Dessert[0].Dessert.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <span className="menu-item">{menuItem.item}</span>
                            <span className="description">{menuItem.description}</span>
                            <span className="price">{menuItem.price}</span>
                        </div>
                    </div>
                )
            })}
            <h3 className="menu-category">We Have Special Dessert Menu- Please Ask Our Staff</h3>
        </div>
    )
}
