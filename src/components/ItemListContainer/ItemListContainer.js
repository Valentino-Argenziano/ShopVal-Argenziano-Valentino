import React from 'react'
import NavBar from '../NavBar/NavBar.js'
import {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount.js'
import { products } from '../../assets/productos.js'
import { ItemList } from '../ItemList/ItemList.js'
import { customFetch } from '../../assets/customFetch.js'
import { LinearProgress } from '@mui/material'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.js'


const ItemListContainer = ({greeting1}) => {
    const[listProducts, setListProducts] = useState([])
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        customFetch(products)
        .then(data => {
            setLoading(true)
            setListProducts(data)
        })
    },[])

return (
    <>
    <h2>{greeting1}</h2>
    {!loading && <LinearProgress />}
    {loading && <ItemList listProducts = {listProducts}/>}
    {/* <ItemCount stock="5" initial="1"/> */}
    </>
)
}

export default ItemListContainer