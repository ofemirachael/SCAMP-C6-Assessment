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
    
    
    onImageClick = () => {
       
         for(let i = 0, len = images.length; i < len; i++){

            // images[i].onclick = function() { 
            //     //this.setState({ shown: images[i] })
            //     console.log(images[i])
            // };
            
            if(images[i] === imageone){
                this.setState({ shown: images[0] })
                console.log(images[i])
                console.log("clicked 1")
            }else if (images[i] === imagetwo){
                this.setState({ shown: images[1] })
                console.log(images[i])
                console.log("clicked 2")
            }else if (images[i] === imagethree){
                this.setState({ shown: images[2] })
                console.log("clicked 3")
                console.log(images[i])
            }
            else if (images[i] === imagefour){
                this.setState({ shown: images[3] })
                console.log("clicked 4" )
                console.log(images[i])
            }
            else{
                this.setState({ shown: images[3] })
              
            }
          }
   }
   

    // showPics = images.map((image, key) => {
        
    //     return (<div key={key} onClick={this.onImageClick} ><img src={image}  className="miniimg" /></div>);
       
    // })

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
                    <div key="1" onClick={this.onImageClick.bind(this)} ><img src={images[0]}  className="miniimg" /></div>
                    <div key="2" onClick={this.onImageClick.bind(this)} ><img src={images[1]}  className="miniimg" /></div>
                    <div key="3" onClick={this.onImageClick.bind(this)} ><img src={images[2]}  className="miniimg" /></div>
                    <div key="4" onClick={this.onImageClick.bind(this)} ><img src={images[3]}  className="miniimg" /></div>
                    {/* {this.showPics} */}
                </div>
            </div>
        );
        
        
    }
}

export default ImageCarousel;