import React from 'react';
export const buildMenuInfoContainer = (menuItem) => {
    return(
        <div className="menu-info-container">
            <div className="menu-item-container">
                <div className="menu-item">{`${menuItem.item}`}&nbsp;-&nbsp;</div>
                <div className="description">{menuItem.description}</div>
                <div className="price">{menuItem.price}</div>
            </div>
        </div>
    )
}