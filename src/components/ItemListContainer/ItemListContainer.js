import React from 'react'
import {useState, useEffect} from 'react'
import { products } from '../../assets/productos.js'
import { ItemList } from '../ItemList/ItemList.js'
import { customFetch } from '../../assets/customFetch.js'
import { LinearProgress } from '@mui/material'
import{useParams} from 'react-router-dom'



const ItemListContainer = ({greeting1}) => {
    const[listProducts, setListProducts] = useState([])
    const[loading,setLoading]=useState(false)
    const {id} = useParams()
    useEffect(()=>{
        customFetch(products)
        .then(data => {
            setLoading(true)
            if(id){
                setListProducts(data.filter(item=>item.category===id))
            }else{
                setListProducts(data)
            }
        })
    },[id])

return (
    <>
    <h2>{greeting1}</h2>
    {!loading && <LinearProgress />}
    {loading && <ItemList listProducts = {listProducts}/>}
    </>
)
}

export default ItemListContainer