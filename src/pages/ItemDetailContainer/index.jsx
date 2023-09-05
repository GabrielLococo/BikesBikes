import { useParams } from "react-router"
import Form from 'react-bootstrap/Form'
import { NavBar } from "../../components/NavBar"
import './ItemDetailContainer.css'
import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import { useContext, useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { CartContext } from "../../context/cartContext"
import { collection, doc, getDoc } from "firebase/firestore"
import { firestore } from "../../firebase/app"
import { Link } from "react-router-dom"



export const ItemDetailContainer = () => {
    const updateCart = useContext(CartContext)
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const [products, setProducts] = useState([])
    const [shopData, setShopData] = useState([])

    const addingCartHandler = () => {
        setQuantity(quantity + 1)
        const prod = [...products]
        prod.push({id: shopData.id, price: shopData.price, name: shopData.name})
        setProducts(prod)

    }
    const subCartHandler = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            const subProds = [...products]
            subProds.pop()
            setProducts(subProds)
        }
    }
    

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const docRef = doc(firestore, "productos", params.id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setShopData(docSnap.data())
                    setLoading(false)
                } else {
                    console.log("no se encontró tal documento");
                }

            } catch (error) {
                console.error('fetching error', error);
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <NavBar />
            {loading
                ? <Skeleton cards={1} />
                : <article>
                    <Card className="text-center" style={{ width: '42rem' , border:'2px solid black' }}>
                        <Card.Header style={{fontWeight:'600', fontSize:'30px', fontFamily:'Georgia'}} >{shopData.name}</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={''} onError={(e) => (
                                (e.target.src =
                                    "https://actitudsports.com.ar/wp-content/uploads/2022/01/shift1.jpg")
                            )
                            } style={{ height: 310, objectFit: 'fill' }} />
                            <Card.Title className='cardTitle'>Precio: US$ {shopData.price}</Card.Title>
                            <Card.Text>
                                {shopData.description}
                            </Card.Text>
                            <Button variant="success" style={{color:'black'}} onClick={() => { updateCart.addCartValue(products) }}>Agregar al carrito😀</Button>{' '}
                            <Button variant="secondary" onClick={subCartHandler}>-</Button>{' '}
                            <div className='NumberFormContainer'>
                                <Form.Label htmlFor="inputProducts">Cantidad</Form.Label>
                                <Form.Control placeholder="0"
                                    type="number" min={1} value={quantity} onChange={() => { }}
                                    id="inputProducts"
                                />
                            </div>{' '}
                            <Button variant="secondary" onClick={addingCartHandler}>+</Button>{' '}
                            <Link to={'/Cart'}><Button variant="success" style={{color:'black'}}>Ir al carrito🚲</Button></Link>
                        </Card.Body>
                        <Card.Footer className="text-muted">10 Stock</Card.Footer>
                    </Card>
                </article>}
        </>
    )
}
