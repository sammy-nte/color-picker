import React from "react";
import "./styles/ColorRender.css";

function Colorbox(props){

    return(
        <div className="color-container">
            <div>
                {props.colors}
            </div>
        </div>
    )
}

export default Colorbox