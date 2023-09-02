import { useContext, useState } from 'react';
import { InputForm } from '../../components/InputForm';
import './Checkout.css';
import { Button } from 'react-bootstrap';
import { Layout } from '../../components/Layout';
import { CartContext } from '../../context/cartContext';
import { useUniqueObjectsWithQuantity } from '../../hooks/useUniqueObjectsWithQuantity';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export const Checkout = () => {
    const contextInfo = useContext(CartContext)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const onChangeInput = (event, setValue) => {
        setValue(event.target.value)
    }

    const [products, totalPrice] = useUniqueObjectsWithQuantity(contextInfo.cartProducts)

    const handleConfirm = (event) => {
        event.preventDefault()
        contextInfo.createOrder(contextInfo.cartProducts, { name, phone, email }, totalPrice)
    }
    const goBack = () => {
        contextInfo.clearOrderId()
        contextInfo.clearCart()
    }

    return (<>
        {!contextInfo.orderId ? <main className="checkoutContainer">
            <img src={Logo} height={100} />
            <form onSubmit={handleConfirm}>
                <InputForm onChange={(event) => onChangeInput(event, setName)} value={name} label={'Nombre'} />
                <InputForm onChange={(event) => onChangeInput(event, setPhone)} value={phone} label={'Tel'} />
                <InputForm onChange={(event) => onChangeInput(event, setEmail)} type='email' value={email} label={'E-mail'} />
                <Button type='submit' disabled={!(name !== '' && phone !== '' && email !== '') || (contextInfo.cartProducts.length < 1)} style={{ margin: '0 auto' }} variant='primary'>Finalizar la compra</Button>
            </form>
            <h2>Precio total : ${totalPrice}</h2>
        </main>
            : <main className="checkoutContainer"><h1>ID de tu compra: </h1> <h3 style={{background:'grey', width:'100%', textAlign:'center',borderRadius:'10px',color:'black',padding:'10px'}} > {contextInfo.orderId}</h3><Link to={'/'}><Button onClick={goBack} variant='success'>Volver</Button></Link></main>}</>
    );
}
