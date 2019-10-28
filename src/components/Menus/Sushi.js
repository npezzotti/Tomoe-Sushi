import React from 'react'

const menu= [{item: "apple", price: "$15"}]
export default function Sushi() {
    return(
        <div className="menu-container">
            <h3 className="menu-category">Sushi-Bar</h3>
            {menu.map(menuItem => {
                return(
                    <div className="menu-item-container">
                        <div className="menu-item">{menuItem.item}</div>
                        <div className="price">{menuItem.price}</div>
                    </div>
                )
            })}
            <h3 className="menu-category">We Have Special Dessert Menu- Please Ask Our Staff</h3>
        </div>
    )
}