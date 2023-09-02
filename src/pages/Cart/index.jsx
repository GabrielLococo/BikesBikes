import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { CartContext } from '../../context/cartContext'
import './Cart.css'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  CgMathPlus, CgMathMinus } from "react-icons/cg"
import { useUniqueObjectsWithQuantity } from '../../hooks/useUniqueObjectsWithQuantity'
import { Layout } from '../../components/Layout'


export const Cart = () => {
    const cartInfo = useContext(CartContext)

    const [cartProducts, totalPrice] = useUniqueObjectsWithQuantity(cartInfo.cartProducts)
    return (
        <Layout>
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
            {cartProducts.length ? <Card.Footer className="text-muted"><Button variant="success" onClick={cartInfo.clearCart}>Limpiar carrito</Button>{' '}<Link to='/Checkout'><Button style={{ width: '100%', marginTop: '20px' }} variant="dark">Finaliza tu compra!</Button></Link>
            </Card.Footer>
                : <Card.Footer className="text-muted"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}><Button variant="success">🤑COMPRAR🤑</Button></Link>
                </Card.Footer>}

        </Card>
        </Layout>
    );
}