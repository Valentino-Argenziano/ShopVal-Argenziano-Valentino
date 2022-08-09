import React from 'react'
import {useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { Item } from '../Item/Item';
import { LinearProgress } from '@mui/material'
import { customFetch } from '../../assets/customFetch';
import { products } from '../../assets/productos.js'


function ItemDetailContainer() {
    const [listProducts,setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{
        customFetch(products)
        .then(data => {
            setLoading(true)
            setListProducts(data.find(item=>item.id===1))
        })
    },[])
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
