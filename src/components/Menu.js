import React from 'react';
import {
  
  Link,
 
} from "react-router-dom";

const menus = [
    {
        title: 'Home',
        to:'/intro',
        nameIcon:'fas fa-home',
    },
    {
        title: 'Product',
        to:'/product',
        nameIcon:'fas fa-address-book',
        
    },
    {
        title: 'Type Of Product',
        to:'/type',
        nameIcon:'fas fa-box',
    },
    {
        title: 'Logout',
        to:'/logout',
        nameIcon:'fas fa-sign-out-alt',
    },
]

function Menu(props) {

    
    return (
        
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul>
                {menus.map((menu, index)=>(
                    <li key={index}>
                        <Link to={menu.to}>
                            <i className={menu.nameIcon}></i>
                            {menu.title}
                        </Link>
                        
                    </li>
                ))}

            </ul>
            <div className="social_media">
                
            </div>
        </div>
        
    );
}

export default Menu;