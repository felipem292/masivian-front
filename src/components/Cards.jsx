import React from 'react'
import Card from "react-bootstrap/Card";
import { Stars } from "./Stars";
import "./styles/Cards.css";
export const Cards = ({title, img}) => {
    return (
   
      <div className="card">
        <h1>{title}</h1>
        <img className="comic-img" src={img} alt={title} width="60%" />        
        <Stars />
        <h5>Calificanos</h5>      
       
      </div>
    )
}
