import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Item = ({ product }) => {
    return (
        <div className="item">
        <Card className='cardShop' sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                height="260"
                image={product.image}
                alt={product.name}
                title={product.product}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.product}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description} 
                    " Precio: ${product.price}"
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Ver más</Button>
            </CardActions>
        </Card>
        </div>
    )

}

export{ Item }




