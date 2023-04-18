import React from "react";

function Colorbox(props){
    const {color} = props
    function copyText(event){
        const text = event.target.textContent;
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Copied the text: " + text);
            })
            .catch((err) => {
                alert(`Error copying to clipboard: ${err}`);
            });
    }
    return(
        <div onClick={copyText} className="colors" style={{background: color.value}}>
            <p className="color">{color.value}</p>
        </div>
    )
}

export default Colorbox