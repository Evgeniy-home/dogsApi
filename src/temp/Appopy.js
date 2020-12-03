//import logo from './logo.svg';
//import Axios from 'axios';
import { Component } from 'react';
import './App.css';
import React from 'react'
//import DogRandom from "./DogRandom"
import Form from "./Form"
import DogsStatus from "./DogStatus"

class App extends React.Component{

  state = {
    imageDog: undefined,
    status: undefined,
    error:undefined
  }
  
  getRandomDog = async (event)=> {
    event.preventDefault();
    const apiUrl = await
    fetch ("https://dog.ceo/api/breeds/image/random");
    const dogs = await apiUrl;
    console.log(dogs);
    this.setState({
        imageDog: dogs,
        status: dogs.status,
        error: ""

    });
  }

  render(){
    return (
      <div>

<Form>dogsImage={this.getRandomDog}</Form>
<DogsStatus>
imageDog={this.state.imageDog}
status={this.state.status}
error={this.state.error}
</DogsStatus>
      </div>
    )
  }
}
// function App(){
//   return <DogRandom></DogRandom>
// }

//function App() {
  // const image = Axios.post ('https://dog.ceo/dog-api/')
  // return (
  //   image
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

export default App;