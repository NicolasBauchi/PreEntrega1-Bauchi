import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ItemDetail = ({ producto }) => {
    /* .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .img-card{
        width: 100%;
        height: 100%;
    }
    .titulo-card{
        font-size: 20px;
    }
    .subtitulo-card{
        font-size: 14px;
        font-weight: 600;
    }
    .text-card{
        font-size: 12px;
    } */
    const estilos = {
        container: {
            flexDirection: "center",
            justifyContent: "center",
            maxWidth: 800,
            maxHeight: 600,
            backgroundColor: "lightblue"
        },
        tituloCard: { fontSize: 28 },
        subtituloCard: { fontSize: 17, fontWeight: "600" },
        textoCard: { fontSize: 14, color: "grey" }
    }


    {/* <CardActions>
<Button size="small"><Link to={`/producto/${producto.id}`}>Ver detalles</Link></Button>
</CardActions> */}

    return (


        <Card style={estilos.container} >
            <CardMedia
                component="img"
                alt={producto.title}
                height="220"
                image={producto.image} /* style={estilos.imgCard} */
            />
            <CardContent>
                <Typography gutterBottom variant="h2" component="div" style={estilos.tituloCard}>
                    {producto.title}
                </Typography>
                <Typography variant="body2" >
                    <span style={estilos.subtituloCard}>Descripción: </span> <span style={estilos.textoCard}>{producto.description}</span>
                </Typography>
                <Typography variant="body2" >
                    <span style={estilos.subtituloCard}>Precio: </span> <span style={estilos.textoCard}>USD${producto.price}</span>

                </Typography>
            </CardContent>
        </Card>

    );

}
