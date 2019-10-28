import React from 'react'

const menu= [{item: "apple", price: "$15"}]
export default function Lunch(){
    return(
        <div className="menu-container">
            <h3 className="menu-category">Lunch Special from Sushi Bar</h3>
            {menu.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{menuItem.item}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}