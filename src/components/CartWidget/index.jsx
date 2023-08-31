import React, { useContext, useState } from 'react';
import { MdPedalBike } from "react-icons/md";
import './CartWidget.css';
import { CartContext } from '../../context/cartContext';    
import { Link } from 'react-router-dom';


export const CartWidget = () => {
    const cartContext = useContext(CartContext)
    return (
        <div className='cart-container'>
        <Link to='/Cart'>
                <MdPedalBike className='justify-content-end'   style={{ color: '#b93939' }} size={25} />
                <span className='cart-value'>{cartContext.cartValue}</span>
            </Link>
        </div>
    )
}
