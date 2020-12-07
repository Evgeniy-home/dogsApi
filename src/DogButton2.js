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
          <button style={{height:30, widht:10}} onClick={this.getRandomImage}>Загрузить картинку</button>
          <button style={{height:30, widht:10}} onClick={this.getRandomImage}>Перемешать</button>
        <div>
          <img style={{height:250, weidht:300}} alt="" src={imgDOG} />
        </div>
        
      </div>
    )
  }
}

export default DogButton2
