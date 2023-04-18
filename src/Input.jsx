import {React, useState, useEffect }from "react";
import Colorbox from "./Colorbox";
import "./styles/Input.css"


function Input(){
    const [inputSelection, setInputSelection] = useState({
        hexInput: "",
        colorOption: ""
    })

    
    function handleChange(event){
        const {name, value} = event.target
        setInputSelection(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }
    
    function createUrl(){
        const color = inputSelection.hexInput
        const hexColor = color.replace("#", "")
        const mode = inputSelection.colorOption
        return `https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${mode}&count=5`
    }
    
    const [colors, setColors] = useState([])
    
    function handleClick(e){
        e.preventDefault()
        let url = createUrl()
        fetch(url)
            .then(response => response.json())
            .then(data => setColors(data.colors))
    }

    console.log(colors)

    return(
        <div className="form-container">
            <form className="form" onSubmit={handleClick}>
                <input type="text" name="hexInput" value={inputSelection.hexInput} onChange={handleChange} placeholder="Enter value in hex.."/>
                <select name="colorOption" id="color-options" value={inputSelection.colorOption} onChange={handleChange}>
                    <option value="">--Select--</option>
                    <option value="monochrome">Monochrome</option>
                    <option value="monochrome-dark">Monochrome-dark</option>
                    <option value="monochrome-light">Monochrome-light</option>
                    <option value="analogic">Analogic</option>
                    <option value="complement">Complement</option>
                    <option value="analogic-complement">Analogic-complement</option>
                    <option value="triad">Triad</option>
                </select>
                <button onClick={handleClick} className="query-btn">Get color scheme</button>
            </form>
            {colors.length > 0 ? <Colorbox colors={colors} /> : null}
        </div>
    )
}
export default Input