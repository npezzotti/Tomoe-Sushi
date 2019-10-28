import React from 'react'

<<<<<<< HEAD
export default function Lunch(){
    return(
        <div className="lunch">

=======
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
>>>>>>> c860339ed85b34a9d3b0d08f6f1711369bae8857
        </div>
    )
}