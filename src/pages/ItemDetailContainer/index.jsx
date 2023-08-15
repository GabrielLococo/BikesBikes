import { json, useParams } from "react-router"
import { NavBar } from "../../components/NavBar"
import './ItemDetailContainer.css'
import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react"
import { getData } from '../../data'
import Skeleton from "react-loading-skeleton"

export const ItemDetailContainer = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [shopData, setShopData] = useState([])
    useEffect(() => {
        setLoading(true)
        getData()
            .then(data => {
                const findData = data.find(item => item.id === Number(params.id))
                setShopData(findData)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])
    return (
        <>
            <NavBar />
            {loading
                ? <Skeleton cards={1} />
                : <article>
                    <Card className="text-center" style={{ width: '42rem' }}>
                        <Card.Header>{shopData.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>${shopData.price}</Card.Title>
                            <Card.Text>
                                {shopData.description}
                            </Card.Text>
                            <Button variant="primary">Agregar al carrito</Button>{' '}
                            <Button variant="success">Comprar!</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">3 Stock</Card.Footer>
                    </Card>
                </article>}
        </>
    )
}
