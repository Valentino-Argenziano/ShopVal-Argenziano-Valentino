import React from 'react'
import {useState} from 'react'
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'




const ItemCount = ({initial,stock,onAdd}) => {
    const [contador, setContador]=useState(1);
    const [ open, setOpen ] = useState(false)

    

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
        onAdd(contador)
        setOpen(true)
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
        { !open ? (<div className="itemCount_agregar">
        <Button variant="contained" color="warning" onClick={agregarCarrito}>
                <p>Agregar al carrito</p> 
        </Button>
        </div>)
        :
        (<div className="itemCount__terminar">
                <Link to="/cart">
                    <Button variant="contained" color="primary" >
                        <p>Terminar la compra</p>
                    </Button>
                </Link>
            </div>) }
        </div>
        </>
    )
}

export default ItemCount