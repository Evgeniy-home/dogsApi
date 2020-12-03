import React from 'react';
import Dog from "./Dog";

const DogGallery = (props) => {


    const dogsArray = props.dogs.map((dogURL) => {
        return <Dog url={dogURL} />
    })

    return(
        <div className="container">
                {dogsArray}

        </div>
    )
}

export default DogGallery;