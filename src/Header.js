import React from "react";
import './Header.css';
import { ShoppingCart } from 'react-feather';
import profile from "./img/profile.jpg";
import bc from "./img/bc.png";


class Header extends React.Component{

  state = { showing: false };

    render() {
      const { showing } = this.state;
        return <>
        <div className="navigation">
           
            <nav className="headerspan">
                <a href="#" className="toggle"  onClick={() => this.setState({ showing: !showing })}><img src={bc} height="24"/></a>
                <a className="logo">Sneakers</a>
                
                    <ul className="mainnav" style={{ display: (showing ? 'none' : 'block') }}>
                        <li className="item">Collections</li>
                        <li className="item">Men</li>
                        <li className="item">Women</li>
                        <li className="item">About</li>
                        <li className="item">Contact</li>
                        
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