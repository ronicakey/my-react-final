import { Container, Row } from 'react-bootstrap';
import Item from './Item';
import React from 'react';

const ItemList = (props) => {
  return ( 
    <Container>  
      <Row xs={1} md={2} lg={4} className="justify-content-evenly m-4"> 
        {   
          props.item.map(obj => {
            return (
              <Item
                key={obj.id}
                id={obj.id}
                myId={obj.myId}
                title={obj.title}
                description={obj.description}
                price={obj.price}
                img={obj.img}
              />
            )
          })
        }
      </Row>
    </Container> 
  )
}

export default ItemList;