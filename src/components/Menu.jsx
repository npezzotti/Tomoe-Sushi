
import React, { useState } from 'react';
import Dessert from './Menus/Dessert';
import Drinks from './Menus/Drinks';
import Kitchen from './Menus/Kitchen';
import Lunch from './Menus/Lunch';
import Sushi from './Menus/Sushi';


function Menu() {
    const [menu, changeMenu] = useState(null)
    const menus = ["LUNCH", "SUSHI-BAR", "KITCHEN", "DESSERT", "DRINKS"]
    return(
        <div>
            <h1 className="menu-list-title">Menu:</h1>
            <div className="menu-list">
                {menus.map(item => {
                    return(
                        <div className="menu">
                            <h2 className="menu-title">{item}</h2>
                            <img className="menu-image" src="#" alt={item} />
                        </div>
                    )
                })}
            </div>
            <Dessert onClick={() => changeMenu(Dessert)}/>
            <Drinks onClick={() => changeMenu(Dessert)}/>
            <Kitchen onClick={() => changeMenu(Dessert)}/>
            <Lunch onClick={() => changeMenu(Dessert)}/>
            <Sushi onClick={() => changeMenu(Dessert)}/>
        </div>
    )

}

export default Menu