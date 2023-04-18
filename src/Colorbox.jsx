import React from "react";
import "./styles/ColorRender.css";

function Colorbox(props){
    return(
        <div className="color-container">
            <div>
                {props.colors.map(color => (
                    <div style={{ backgroundColor: color.value }}>
                        {color.value}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Colorbox