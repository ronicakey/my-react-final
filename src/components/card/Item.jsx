import Card from 'react-bootstrap/Card';
import React from 'react';

const Item = (props) => {
  return ( 
    <Card style={{ width: "17rem" }} className="text-center m-3">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ lineHeight:"1", fontSize:"15px" }}>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <p className="fs-5 fw-bold">{props.price}</p>
      </Card.Footer>
    </Card>
  );
}

export default Item;