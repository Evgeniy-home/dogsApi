import react, { Component } from "react"
//import Button from "./Button"

class DogButton extends Component{

    constructor(props){
        super(props);
        this.state = {
        randDog: ""
        }
        this.getRandomDogImg = this.getRandomDogImg.bind(this);
        }
    
    

    getRandomDogImg(){
             fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
              this.setState({randDog: data.message})
          })
    }


    render() {
        return(
                <button onClick={this.getRandomDogImg}>
                    Ne Rabotaet
                </button>
        );
    }
}

export default DogButton
