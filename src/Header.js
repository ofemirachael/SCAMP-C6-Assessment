import React from "react";
import './Header.css';
import { ShoppingCart } from 'react-feather';
import profile from "./img/profile.jpg";


class Header extends React.Component{

    render() {

        return <>
        <div className="navigation">
           
            <nav className="headerspan">
                <a className="logo">Sneakers</a>

                <ul className="mainnav">
                    <li className="item">Collections</li>
                    <li className="item">Men</li>
                    <li className="item">Women</li>
                    <li className="item">About</li>
                    <li className="item">Contact</li>
                    <li className="toggle"><a href="#"><img src="./img/images.png" /></a></li>
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