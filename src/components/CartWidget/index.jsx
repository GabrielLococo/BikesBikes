import React, { useState } from 'react'
import { MdPedalBike } from "react-icons/md";
import './CartWidget.css'


export const CartWidget = () => {
    const [cartCount, setCartcout] = useState(0)
    return (
        <div className='cart-container'>
        <MdPedalBike color='white' size={25}/>
        <span className='cart-value'>{cartCount}</span>
        </div>
    )
}


//LISTO JSX Y CSS
