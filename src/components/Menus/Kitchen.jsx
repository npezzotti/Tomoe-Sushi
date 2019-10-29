import React from 'react';
import json from './menu'
import { Icon } from '@opuscapita/react-icons';


const menu = json

export default function Kitchen(props){
    return(
        <div className="menu-container" style={{color: "white"}}>
        <Icon className="remove-button" type="indicator" name="remove" onClick={props.changeMenu}/>
            {menu[3].Kitchen[0].unDefined.map(menuItem => {
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
            <h3 className="menu-category">Fresh Seafood</h3>
            {menu[3].Kitchen[1].Fresh_Seafood.map(menuItem => {
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
            <h3 className="menu-category">Cooked Seafood</h3>
            {menu[3].Kitchen[2].Cooked_Seafood.map(menuItem => {
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
            <h3 className="menu-category">Tempura</h3>
            {menu[3].Kitchen[3].Tempura.map(menuItem => {
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
            <h3 className="menu-category">Meat</h3>
            {menu[3].Kitchen[4].Meat.map(menuItem => {
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
            <h3 className="menu-category">Dinner</h3><p>comes with rice</p>
            {menu[3].Kitchen[5].Dinner.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{`${menuItem.item}-`}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
            <h3 className="menu-category">Noodle</h3>
            {menu[3].Kitchen[6].Noodles.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{`${menuItem.item}-`}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
            <h3 className="menu-category">Fried & Steamed Dishes</h3>
            {menu[3].Kitchen[7].Fried_and_Steamed_Dishes.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{`${menuItem.item}-`}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
            <h3 className="menu-category">Tofu & Vegetables</h3>
            {menu[3].Kitchen[8].Tofu_and_Vegetables.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{`${menuItem.item}-`}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
            <h3 className="menu-category">Extras</h3>
            {menu[3].Kitchen[9].Extras.map(menuItem => {
                return(
                    <div className="menu-info-container">
                        <div className="menu-item-container">
                            <div className="menu-item">{`${menuItem.item}-`}</div>
                            <div className="price">{menuItem.price}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}