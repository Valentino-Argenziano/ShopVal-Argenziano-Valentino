import { Button } from '@mui/material';
import React, { useContext } from 'react'
import {contexto} from '../CartContext/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom';



function Cart() {
    const { cart, clearCart, total } = useContext(contexto)
    console.log(cart);

    return (
        <div className="cart">
            { cart.length > 0 ? (
            <h1>Dale, compra!</h1>
            )    
            :
            ( <>
            <h1>Aún no elegiste tus productos</h1>
                <Link to={"/"}>
                <Button onClick={clearCart} variant="contained" color="primary">
                    Volver a los productos
                </Button>
            </Link>
            </>)}

            <div className="cartItems">
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id} name={product.name} image={product.image} price={product.price} 
                amount={product.amount} />)}
            </div>


            { cart.length > 0 &&
            <>
            <h2>${total}</h2>
            <div className="cartItems__buttons">
                <Button onClick={clearCart} variant="contained" color="primary">
                    Sacar todo del carrito
                </Button>
                <Button onClick={() => {console.log(cart)}} variant="contained" color="warning">
                    A pagar! 
                </Button>
            </div>
            </>}


        </div>
    )
}

export default Cart