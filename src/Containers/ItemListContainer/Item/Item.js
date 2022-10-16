import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Item = ({ producto }) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={producto.title}
                height="140"
                image={producto.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {producto.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {producto.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ver detalles</Button>
            </CardActions>
        </Card>
    );
}
