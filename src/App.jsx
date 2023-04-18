import React from "react";
import Input from "./Input";
import Colorbox from "./Colorbox";
import "./styles/App.css"

export default function App(){
  return(
    <div className="container">
      <h1>Color Changer</h1>
      <Input />
      <Colorbox />
    </div>
  )
}