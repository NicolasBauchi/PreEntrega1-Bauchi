import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Item = ({ producto }) => {
    let colorTexto = "#ECE0D0";
    let colorFondoTexto = "#453A3A";

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
        img: {
            height: 200,
        },
        info: {
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            backgroundColor: colorFondoTexto,
            color: colorTexto,
        },
        act: {
            backgroundColor: colorFondoTexto,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        enlace: {
            textDecoration: "none",
        },
        subTitle: {
            color: colorTexto,
            fontSize: 17,
        },
        btn: {
            paddingTop: 10,
            paddingBotom: 10,
            marginBottom: 15,
        },
    };

    return (
        <Card sx={{ width: 345 }} style={estilos.container} >
            <CardMedia style={estilos.img}
                component="img"
                alt={producto.title}
                image={producto.image}
            />
            <CardContent style={estilos.info}>
                <Typography gutterBottom variant="h5" component="div" style={estilos.title}>
                    {producto.title}
                </Typography>
                <Typography variant="body2" style={estilos.subTitle}>
                    Precio: $ {producto.price}
                </Typography>
            </CardContent>
            <CardActions style={estilos.act}>
                <Link style={estilos.enlace} to={`/producto/${producto.id}`}>
                    <Button style={estilos.btn} size="small" color="primary" variant="contained">Ver detalles</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
