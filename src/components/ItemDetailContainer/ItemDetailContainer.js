import React from 'react'
import {useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { LinearProgress } from '@mui/material'
import { customFetch } from '../../assets/customFetch';
import { products } from '../../assets/productos.js'
import {useParams} from 'react-router-dom'


function ItemDetailContainer() {
    const [listProducts,setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const{id}=useParams()
    
    useEffect(()=>{
        customFetch(products)
        .then(data => {
            setLoading(true)
            setListProducts(data.find(item=>item.id==id))
        })
    },[id])
    return(
        <>
        {
            loading?
            
            <ItemDetail listProducts={listProducts}/>
            :
            <div className='text-center'>
                <LinearProgress />
            </div>
        }
        </>
    )
}

export default ItemDetailContainer
