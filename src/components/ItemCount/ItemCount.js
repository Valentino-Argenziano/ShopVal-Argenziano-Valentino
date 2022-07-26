import React from 'react'
import {useState} from 'react'
import { Button } from '@mui/material';




const ItemCount = () => {
    const resultado = useState(0)
    let contador = resultado [0]
    const setContador = resultado[1]
    

    const aumentarContador = () => {
        setContador(contador + 1)
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }

    const agregarCarrito = ()=>{

    }

    return (
        <>
        <div className="itemCount">
        <h3>{contador}</h3>
        <div className="itemCount__counter">
        <Button variant="contained" onClick={disminuirContador} className="botonContador1">-</Button>
        <Button variant="contained" onClick={aumentarContador} className="botonContador2">+</Button>
        </div>
        <div className="itemCount_agregar">
        <Button variant="contained" color="warning" onClick={agregarCarrito}>
                <p>Agregar al carrito</p>
        </Button>
        </div>
        </div>
        </>
    )
}

export default ItemCount