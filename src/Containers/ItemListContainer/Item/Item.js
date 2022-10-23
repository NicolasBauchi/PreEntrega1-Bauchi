import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Item = ({ producto }) => {
    const estilos = {
        container: {
            width: window.innerHeight > 900 ? "25%" : "90%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
            backgroundColor: "rgba(249, 220, 92, 0.3)",
        },
        title: {
            textOverflow: "ellipsis",
            overflow: "hidden",
            height: 100,
        },
    };

    return (
        <Card sx={{ maxWidth: 345 }} style={estilos.container} >
            <CardMedia
                component="img"
                alt={producto.title}
                height="140"
                image={producto.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"  style={estilos.title}>
                    {producto.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio: $ {producto.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Link to={`/producto/${producto.id}`}>Ver detalles</Link></Button>
            </CardActions>
        </Card>
    );
}
