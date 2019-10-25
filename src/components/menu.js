import React from 'react'
import Dessert from './Menus/Dessert'
import Drinks from './Menus/Drinks'
import Kitchen from './Menus/Kitchen'
import Lunch from './Menus/Lunch'
import Sushi from './Menus/Sushi'


const Menu = () => {


    return(
        <div>
            Menu:
            <Dessert/>
            <Drinks/>
            <Kitchen/>
            <Lunch/>
            <Sushi/>
            

        </div>
    )

}

export default Menu