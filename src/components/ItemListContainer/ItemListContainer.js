import React from 'react'
import {useState, useEffect} from 'react'
import { products } from '../../assets/productos.js'
import { ItemList } from '../ItemList/ItemList.js'
import { customFetch } from '../../assets/customFetch.js'
import { LinearProgress } from '@mui/material'
import{useParams} from 'react-router-dom'
import { db } from '../../Firebase/firebase.js'
import { collection } from 'firebase/firestore'
import { getDocs, query, where} from 'firebase/firestore'



const ItemListContainer = ({greeting1}) => {
    const[listProducts, setListProducts] = useState([])
    const[loading,setLoading]=useState(false)
    const {id} = useParams()
    useEffect(()=>{
        if(!id){

        
        const productsCollection = collection(db, "products")
        // const filtro = query(productsCollection, where("category","==",id))
        const consulta = getDocs(productsCollection)

        consulta.then(snapshot =>{
            const productos = (snapshot.docs.map(doc=>{
                const elemento = {
                    ...doc.data(),
                    id: doc.id
                }
                return elemento
            }));
            setListProducts(productos)
            setLoading(true)
        })
        .catch(err =>{
            console.log(err);
        })
    }else{
        const productsCollection = collection(db, "products")
        const filtro = query(productsCollection, where("category","==",id))
        const consulta = getDocs(filtro)
    
        consulta.then(snapshot =>{
            const productos = (snapshot.docs.map(doc=>{
                return{
                    ...doc.data(),
                    id: doc.id
                }
            }));
            setListProducts(productos)
            setLoading(true)
        })
        .catch(err =>{
            console.log(err);
        })
    }
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

        /*customFetch(products)
        .then(data => {
            setLoading(true)
            if(id){
                setListProducts(data.filter(item=>item.category===id))
            }else{
                setListProducts(data)
            }
        })*/