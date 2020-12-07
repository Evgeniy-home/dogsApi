import React, {Component} from 'react';
import Dog from "./Dog";
import DogButton2 from './DogButton2';
import "./DogGallery.css";



class DogGallery extends Component {
    constructor(props) {
        super(props);
        this.state={
          dogsArray: props.children.map((dogURL) => {
          return <Dog url={dogURL}/>
          })
        }
    }
          
    render() {
        
    return(
        <div className="container">
        <DogButton2></DogButton2>
            {this.state.dogsArray} 
        </div>
    )
    }
}

export default DogGallery;