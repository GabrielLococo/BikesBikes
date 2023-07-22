import React from 'react'
import { MdPedalBike } from "react-icons/md";

import './CartWidget.css'


export const CartWidget = () => {
    return (
        <div className='cart-container'>
        <MdPedalBike color='white' size={25}/>
        <span className='cart-value'>0</span>
        </div>
    )
}

