import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { CartContext } from '../../context/cartContext'
import './Cart.css'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  CgMathPlus, CgMathMinus } from "react-icons/cg"


export const Cart = () => {
    const cartInfo = useContext(CartContext)
    function removeDuplicatesAndCount(inputArray) {
        const countMap = {};

        inputArray.forEach(obj => {
            const key = JSON.stringify(obj);
            countMap[key] = (countMap[key] || 0) + 1;
        });

        const resultArray = [];
        for (const key in countMap) {
            if (countMap.hasOwnProperty(key)) {
                const obj = JSON.parse(key);
                obj.units = countMap[key];
                resultArray.push(obj);
            }
        }
        return resultArray;
    }

    const cartProducts = removeDuplicatesAndCount(cartInfo.cartProducts)
    const totalPrice = cartProducts.map(prod => prod.price * prod.units).reduce((a, b) => a + b, 0)
    return (
        <Card className="text-center">
            <Card.Header className='headerCard' >Carrito</Card.Header>
            {cartProducts.length ? cartProducts.map(prod => (
                <Card.Body key={prod.id} className='bodyCard'>
                    <Card.Title className='nameCart'>{prod.name}</Card.Title>
                    <Card.Text className='cardText'>
                        Unidades: {prod.units} <CgMathPlus className='unitsModifyButton bmore' onClick={() => cartInfo.addCartValue([{ id: prod.id, price: prod.price, name: prod.name }])} />{' '}
                        <CgMathMinus className='unitsModifyButton bless' onClick={() => cartInfo.deleteCartValue(cartInfo.cartProducts, { id: prod.id, price: prod.price, name: prod.name })} />
                    </Card.Text>
                    <Card.Text className='cardText'>
                        Precio: ${prod.price}
                    </Card.Text>
                    <Card.Text className='cardText'>
                        Total: ${prod.price * prod.units}
                    </Card.Text>
                </Card.Body>
            ))
                : <Alert variant='danger'>
                    No hay productos en el carrito!
                </Alert>}
            <Card.Footer className='text-muted cardText' >TOTAL <br></br>${totalPrice}
            </Card.Footer>
            {cartProducts.length ? <Card.Footer className="text-muted"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}><Button variant="info">Seguir comprando</Button>{' '}<Button variant="warning">Salir</Button></Link>
            </Card.Footer>
                : <Card.Footer className="text-muted"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}><Button variant="primary">Ir a comprar</Button></Link>
                </Card.Footer>}

        </Card>
    );
}