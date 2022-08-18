import React, { useContext } from 'react';
import { contexto } from '../CartContext/CartContext'
import { Button } from '@mui/material';

function CartItem( { id, name, image, price, amount }) {
    const { eliminateFromCart } = useContext(contexto)

    return (
        <div className="cartItem">
            <div className="cartItem__title">
                <h3>{name}</h3>
            </div>
            <div className="cartItem__image">
                <img src={image} alt={name} />
            </div>
            <div className="cartItem__price">
                <h3>${price}</h3>
            </div>
            <div className="cartItem__amount">
                <h3>{amount}</h3>
            </div>
            <div className="cartItem__parcial">
                <h3>${amount*price}</h3>
            </div>
            <Button onClick={ () => eliminateFromCart(id)} variant="contained" color="warning">
                Eliminar
            </Button>
        </div>
    )
}

export default CartItem