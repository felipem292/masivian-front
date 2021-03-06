import React from "react";
//import { useEffect } from 'react'
import { useFetch } from "../hooks/useFetch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/ComicCard.css";
import { Cards } from "./Cards";

export const ComicCard = () => {
  const { loading, data } = useFetch(`https://xkcd.com/614/info.0.json`);
  // const { img, title } = !!data && data;
 
  return (
   
      <Row className="justify-content-center info">       
        <Col xs={12} sm={12} md={8} lg={8}>
          {loading ? (
            <div className="alert alert-info text-center">loading....</div>
          ) : (
            <div className="card animate__animated animate__bounce justify-content-center">            
              <Cards  {...data}/>            
            </div>
          )}
        </Col>        
      </Row>
   
  );
};
