import React from 'react'

const menu= [{item: "apple", price: "$15"}]
const dessertMenu = [{item: "green tea", price: "6.00"}]
export default function Dessert(){
    return(
        <div className="menu-container">
            <h3 className="menu-category">Dessert</h3>
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