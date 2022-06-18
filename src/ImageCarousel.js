import React from "react";
import './ImageCarousel.css';
import imageone from "./img/shoeone.jpg";
import imagetwo from "./img/shoetwo.jpg";
import imagethree from "./img/shoethree.jpg";
import imagefour from "./img/shoefour.jpg";

const images = [ imageone, imagetwo, imagethree, imagefour ]   

let imgone = document.getElementById('Imagesone');
let imgtwo = document.getElementById('Imagestwo');
let imgthree = document.getElementById('Imagesthree');
let imgfour = document.getElementById('Imagesfour');


class ImageCarousel extends React.Component{
    
    state = {   shown: imagefour }
    
    
    onImageClick = (image, key) => {
        this.setState({ shown: image })
       
   }
   

    showPics = images.map((image, key) => {
        
        return (<div key={key} onClick={() => this.onImageClick(image, key)}><img src={image}  className="miniimg" /></div>);
       
    })

    render() {

        return (
            <div className="images">
                <div className="maindisplay">
                    <img 
                    src={this.state.shown} 
                    className="mainimg"
                    />
                </div>
                <div className="minidisplay">
                    {this.showPics}
                </div>
            </div>
        );
        
        
    }
}

export default ImageCarousel;