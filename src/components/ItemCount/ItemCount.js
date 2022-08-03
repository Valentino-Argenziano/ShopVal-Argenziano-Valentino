import React from 'react'
import {useState} from 'react'
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ItemCount = ({initial,stock}) => {
    const [contador, setContador]=useState(1);
    

    const aumentarContador = () => {
        contador < stock ? setContador (contador + 1 ) : toast('Máximo alcanzado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const disminuirContador = () => {
        
        contador > initial ? setContador(contador - 1) : toast('Mínimo alcanzado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        
        
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
        <ToastContainer />
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