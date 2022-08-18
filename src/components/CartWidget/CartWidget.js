import React from 'react'
import {Link} from 'react-router-dom'
import{useContext} from 'react'
import { contexto } from '../CartContext/CartContext'

const CartWidget = () => {

  const {quantity} = useContext(contexto)


  return (
    <div className='cartWidget'>
    <Link to="/cart">
      <span className="material-symbols-outlined">
      shopping_cart
      </span>
      {quantity}
      </Link>
      </div>
  )
}

export default CartWidget