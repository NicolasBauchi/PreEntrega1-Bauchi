import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemQuantitySelector from "../../components/ItemQuantitySelector/ItemQuantitySelector";

export const ItemDetail = ({ producto }) => {
    let colorTexto = "#ECE0D0";
    let colorFondoTexto = "#453A3A";
    let colorEnlaces = "#D39E7C";
    let colorBotones = "#80A9BC";
    const estilos = {

        position: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        },
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: 900,
            height: 500,
            backgroundColor: colorFondoTexto,
            border: "3px solid #453A3A"
        },
        tituloCard: { fontSize: 28, color: colorTexto },
        subtituloCard: { fontSize: 20, fontWeight: "600", color: colorTexto },
        textoCard: { fontSize: 16, color: colorTexto },
        cardImg: { height: 500, width: 400, borderRight: "1px solid #16537E" },
        cardAction: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            /*  marginTop: 40, */
            gap: 30
        },
        cardTypo: {
            /*   marginTop: 40, */
        },
        content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }

    }

    return (

        <div style={estilos.position}>
            <Card style={estilos.container} >
                <CardMedia
                    component="img"
                    alt={producto.title}
                    height="220"
                    image={producto.image} style={estilos.cardImg}
                />
                <CardContent style={estilos.content}>
                    <Typography gutterBottom variant="h2" component="div" style={estilos.tituloCard}>
                        {producto.title}
                    </Typography>
                    <Typography variant="body2" style={estilos.cardTypo}>
                        <span style={estilos.subtituloCard}>Descripción: </span> <span style={estilos.textoCard}>{producto.description}</span>
                    </Typography>
                    <Typography variant="body2" style={estilos.cardTypo} >
                        <span style={estilos.subtituloCard}>Precio: </span> <span style={estilos.textoCard}>USD${producto.price}</span>
                    </Typography>
                    <CardActions style={estilos.cardAction}>
                        <ItemQuantitySelector />
                        <Button size="medium" color="primary" variant="contained">Agregar al carrito</Button>
                    </CardActions>


                </CardContent>
            </Card>
        </div >
    );

}
