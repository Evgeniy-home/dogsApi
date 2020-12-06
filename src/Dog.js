import React from "react"

const Dog =(props) => {
    return(
        <div className="child">
        
            <img style={{height:250, weidht:300}}  src={props.url} alt="dog"/>

        </div>
    )
}

export default Dog