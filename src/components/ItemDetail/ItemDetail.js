import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemDetail = ({ listProducts }) => {
    const [numero, setNumero] = useState(0)
    const onAdd = (num)=>{
        setNumero(numero)
    }
    return (
        <div className='itemDetail'>
            <Card className='cardShop' sx={{ maxWidth: 345 }} >
                <CardMedia
                    component="img"
                    height="260"
                    image={listProducts.image}
                    alt="Air-Force"
                    title={listProducts.product}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {listProducts.product}
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