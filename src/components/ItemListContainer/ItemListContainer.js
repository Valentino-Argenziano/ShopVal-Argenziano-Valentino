import React from 'react'
import NavBar from '../NavBar/NavBar.js'
import {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount.js'
import { products } from '../../assets/productos.js'
import { ItemList } from '../ItemList/ItemList.js'
import { customFetch } from '../../assets/customFetch.js'


const ItemListContainer = ({greeting1}) => {
    const[listProducts, setListProducts] = useState([])
    useEffect(()=>{
        customFetch(products)
        .then(data => setListProducts(data))
    },[])

return (
    <>
    <h2>{greeting1}</h2>
    <ItemList listProducts = {listProducts}/>
    {/* <ItemCount stock="5" initial="1"/> */}
    </>
)
}

export default ItemListContainer