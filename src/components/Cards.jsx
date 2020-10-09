import React from 'react'
import Card from "react-bootstrap/Card";
import { Stars } from "./Stars";
import "./styles/Cards.css";
export const Cards = ({title, img}) => {
    return (
      //   <Card style={{  }}>
      //   <Card.Img className="comic-img" variant="top" src={img} />
      //   <Card.Body className="mx-auto">
      //     <Card.Title>{title}</Card.Title>
      //     <Card.Text>
      //       <Stars />
      //     </Card.Text>
      //   </Card.Body>
        
      // </Card>
      <div className="card">
        <h1>{title}</h1>
        <img className="comic-img" src={img} alt={title} />
        <div className="card-stars">
        <Stars />
        </div>
       
      </div>
    )
}
