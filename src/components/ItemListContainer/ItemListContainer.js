import React from 'react'
import NavBar from '../NavBar/NavBar.js'
import ItemCount from '../ItemCount/ItemCount.js'

const ItemListContainer = ({greeting1}) => {
return (
    <>
    <h2>{greeting1}</h2>
    <ItemCount/>
    </>
)
}

export default ItemListContainer