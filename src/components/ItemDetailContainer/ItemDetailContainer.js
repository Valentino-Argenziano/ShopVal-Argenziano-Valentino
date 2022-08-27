import React from 'react'
import {useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { LinearProgress } from '@mui/material'
import { customFetch } from '../../assets/customFetch';
import { products } from '../../assets/productos.js'
import {useParams} from 'react-router-dom'
import { db } from '../../Firebase/firebase.js'
import { collection, getDoc, doc } from 'firebase/firestore'


function ItemDetailContainer() {
    const [listProducts,setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const{id}=useParams()
    

    useEffect(()=>{
        const productsCollection = collection(db, "products")
        const reference = doc(productsCollection,id)
        const consulta = getDoc(reference)

        consulta 
        .then((res)=>{
            const producto = res.data()
            producto.id = id
            setListProducts(producto)
            setLoading(true)
        })
        .catch((err)=>{
            console.log(err);
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
