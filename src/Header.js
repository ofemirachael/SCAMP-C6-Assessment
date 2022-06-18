import React from "react";
import './Header.css';
import { ShoppingCart } from 'react-feather';
import profile from "./img/profile.jpg"


class Header extends React.Component{

    render() {

        return <>
        <div className="navigation">
           
            <nav className="headerspan">
                <a className="logo">Sneakers</a>

                <ul className="mainnav">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            
            </nav>
            <ul className="staticnav">
                    <li><ShoppingCart/></li>
                    <li><img className="profilephoto" src={profile} /></li>
            </ul>
            
           
        </div>
      
        </>
    }

}
export default Header;