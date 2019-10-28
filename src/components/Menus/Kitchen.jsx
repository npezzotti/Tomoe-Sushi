import React from 'react';

<<<<<<< HEAD
export default function Kitchen(){
    return(
        <div className="kitchen">
<<<<<<< HEAD
            Kitchen
=======

=======
const menu= [{item: "apple", price: "$15"}]
export default function Kitchen(){
    return(
        <div className="menu-container">
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
            <h3 className="menu-category">Fresh Seafood</h3>
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
            <h3 className="menu-category">Cooked Seafood</h3>
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
            <h3 className="menu-category">Tempura</h3>
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
            <h3 className="menu-category">Meat</h3>
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
            <h3 className="menu-category">Dinner</h3><p>comes with rice</p>
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
            <h3 className="menu-category">Noodle</h3>
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
            <h3 className="menu-category">Fried & Steamed Dishes</h3>
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
            <h3 className="menu-category">Tofu & Vegetables</h3>
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
            <h3 className="menu-category">Extras</h3>
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
>>>>>>> nathan
        </div>
    )
}