import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'





export const Item = ({ id, description, price, name}) => {
  return (
    <Col>
      <Card style={{ minHeight: '100%' }}>
      <Card.Img variant="top" src={''} onError={(e) => (
          (e.target.src =
            "https://actitudsports.com.ar/wp-content/uploads/2022/01/shift1.jpg")
        )
        } style={{ height: 310, objectFit: 'cover' }} />
        <Card.Body style={{ minHeight: '180px' }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>${price}</ListGroup.Item>
          <ListGroup.Item><Link style={{color: 'black'}} to={`/Item/${id}`}>INFO</Link></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="secondary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
