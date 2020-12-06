import React, { Component } from 'react';
import Dog from "./Dog";
//import DogButton from './DogButton';
import "./DogGallery.css";


class DogGallery extends Component {
    constructor(props) {
        super(props);
        this.state={
          dogsArray: props.children.map((dogURL) => 
          <Dog url={dogURL}/>
          )
        };
    }


    render() {
    return(
        <div className="container">
            {this.state.dogsArray}        
        </div>
    )
    }
}

export default DogGallery;