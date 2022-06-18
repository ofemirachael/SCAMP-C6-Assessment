import React from "react";
import "./ImageDescription.css"
import { ShoppingCart } from 'react-feather';



class ImageDescription extends React.Component{

    render() {
        return (
          <div className="description">

                <h4 className="companyname">sneaker company</h4>
                <h3 className="shoetitle">Fall Limited Edition Sneakers</h3>
                <p className="shoedescription">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
                <div className="pricesection">
                    <span className="price">$125.00</span> <span className="percentoff">50%</span>
                </div>
                <p className="realprice">$250.00</p>
                <div className="cartsection">
                    <div className="counter">
                        <span className="crements">-</span>
                        <span className="number">0</span>
                        <span className="crements">+</span>
                    </div>
                    
                    <button className="cartbtn"><ShoppingCart size={12} color="white"/> &nbsp; Add to cart</button>
                   
                </div>
          </div>
        
        )
      
    }

}

export default ImageDescription;