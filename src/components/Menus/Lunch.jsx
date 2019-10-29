import React from 'react'
import json from './menu'
// import { Icon } from '@opuscapita/react-icons';


const menu = json

export default function Lunch(props){
    return(
        <div className="menu-container" style={{color: "white"}}>
        {/* <Icon className="remove-button" type="indicator" name="remove" onClick={props.changeMenu}/> */}
            <h3 className="menu-category">Lunch Special from Sushi Bar</h3>
            {menu[1].Lunch[0].Lunch_Special_from_Sushi_Bar.map(menuItem => {
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