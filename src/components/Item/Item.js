import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'


const Item = ({ product }) => {
    return (
        <div className="item">
        <Card className='cardShop' sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                height="260"
                image={product.image}
                alt={product.name}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description} 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartir</Button>
                <Button  as={Link} to={`/detail/${product.id}`} size="small" className='button_item'>Ver más</Button>
            </CardActions>
        </Card>
        </div>
    )

}

export{ Item }




