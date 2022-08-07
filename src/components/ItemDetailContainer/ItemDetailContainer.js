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









/*const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(function () {
                const i = product.find( product => product.id === id)
                console.log(i)
                resolve(i);
            }, 2000);
        }
        )
        promesa.then(result => setProduct(result))
        promesa.catch(err => console.log("Algo salio mal"))

    }, []);
    return (
        <div className='ItemDetailContainer'>
            {product ?
                <ItemDetail
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                />
                :
                <h2>loading</h2>}
        </div>
    )
}

export default ItemDetailContainer*/