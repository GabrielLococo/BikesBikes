import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';//que onda con esto??????????????




export const Item = ({id, src, alt, name, description, price}) => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={src} alt={alt}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>${price}</ListGroup.Item>
            <ListGroup.Item><Link to={`/Item/${id}`}>Detail</Link></ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">Agregar al carrito</Button>
          </Card.Body>
        </Card>
      );
    }
    