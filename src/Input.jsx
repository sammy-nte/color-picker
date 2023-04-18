import {React, useState}from "react";
import Colorbox from "./Colorbox";


function Input(){
    const [inputSelection, setInputSelection] = useState({
        hexInput: "",
        colorOption: ""
    })
    
    const [colors, setColors] = useState([])
    
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
        
    function handleClick(e){
        e.preventDefault()
        let url = createUrl()
        fetch(url)
            .then(response => response.json())
            .then(data => setColors(data.colors))
    }

    const newState = colors.map(data => {
        return data.hex
    })

    const cards = newState.map(item => {
        return (
            <Colorbox key={item.value} color={item} />
        )
    })

    return(
        <div className="form-container">
            <form className="form" onSubmit={handleClick}>
                <input className="form-item" type="text" name="hexInput" value={inputSelection.hexInput} onChange={handleChange} placeholder="Enter value in hex.."/>
                <select className="form-item" name="colorOption" id="color-options" value={inputSelection.colorOption} onChange={handleChange}>
                    <option value="">--Select--</option>
                    <option value="monochrome">Monochrome</option>
                    <option value="monochrome-dark">Monochrome-dark</option>
                    <option value="monochrome-light">Monochrome-light</option>
                    <option value="analogic">Analogic</option>
                    <option value="complement">Complement</option>
                    <option value="analogic-complement">Analogic-complement</option>
                    <option value="triad">Triad</option>
                </select>
                <button onClick={handleClick} className="query-btn form-item">Get color scheme</button>
            </form>
            <div className="color-container">
                {cards}
            </div>
        </div>
    )
}
export default Input
