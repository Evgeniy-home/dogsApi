import react, { Component } from "react"
import React from 'react';
import "./DogGallery.css"

class DogButton2 extends React.Component {
  constructor(){
    super();
    this.state = {
      imgDOG: ""
    }
  }

  getRandomImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data)=>{
          this.setState({ imgDOG: data.message,
        });
      })
  };

  render() {
    
    const {imgDOG} = this.state;
    
    return(
      <div>
        <div className="img">
          <img alt="dog" src={imgDOG} />
        </div>
        <button onClick={this.getRandomImage}>random Dog</button>
      </div>
    )
  }
}

export default DogButton2
