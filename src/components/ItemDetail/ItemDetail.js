import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import {contexto} from '../CartContext/CartContext'

const ItemDetail = ({ listProducts }) => {
    const {addToCart} = useContext(contexto)
    const onAdd = (contador)=>{
        listProducts.cantidad = contador
        addToCart(listProducts,contador)
    }

    
    return (
        <div className='itemDetail'>
            <Card className='cardShop' sx={{ maxWidth: 345 }} >
                <CardMedia
                    component="img"
                    height="260"
                    image={listProducts.image}
                    alt="Air-Force"
                    title={listProducts.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {listProducts.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {listProducts.description}
                        " Precio: ${listProducts.price}"
                    </Typography>
                </CardContent>
                <ItemCount stock="5" initial="1" onAdd={onAdd}/>
                <CardActions>
                </CardActions>
            </Card> 
        </div>
    )
}

export default ItemDetail