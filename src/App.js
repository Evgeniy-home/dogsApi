
import { Component } from 'react';
import './App.css';
import DogGallery from "./DogGallery"



class App extends Component{

  constructor(props) {
  super(props);
  this.state={
    dogs: []
    }
  }

  componentDidMount () {
    fetch("https://dog.ceo/api/breeds/image/random/10")
    .then((res) => res.json())
    .then((data) => {
      this.setState({dogs: data.message})
  })
}

  render(){
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>
          Dog Gallery
        </h1>
        <DogGallery>{this.state.dogs}</DogGallery>
      </div>
    );
  }
}
 
export default App;