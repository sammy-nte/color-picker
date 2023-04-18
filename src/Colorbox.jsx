import React from "react";
import "./styles/ColorRender.css";

function Colorbox(props){
    return(
        <div className="color-container">
            <div id="color1" className="colors"></div>
            <div id="color2" className="colors"></div>
            <div id="color3" className="colors"></div>
            <div id="color4" className="colors"></div>
            <div id="color5" className="colors"></div>
        </div>
    )
}

export default Colorbox