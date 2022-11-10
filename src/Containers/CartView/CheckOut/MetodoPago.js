import React, { useContext } from 'react';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ElContexto } from '../../../components/Context/ContextApp';


export const MetodoPago = () => {

    const { setConfirmarCompra } = useContext(ElContexto);

    const estilos = {
        posicion: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        container: {
            width: 600,
            marginTop: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        doble: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 20,
            marginBottom: 40,
        },
        dobleUnidad: {
            width: 250
        },
        boton: {
            paddingTop: 15,
            paddingBottom: 15,
            marginTop: 40,
        },
    };

    return (
        <div style={estilos.posicion}>
            <Paper elevation={3} style={estilos.container}>

                <h1>Método de pago</h1>
                <div style={estilos.doble}>
                    <TextField id="" label="Nombre de la tarjeta" variant="standard" style={estilos.dobleUnidad} />
                    <TextField id="" label="Número de la tarjeta" variant="standard" style={estilos.dobleUnidad} />
                </div>

                <div style={estilos.doble}>
                    <TextField id="" label="Fecha de vencimiento" variant="standard" style={estilos.dobleUnidad} />
                    <TextField id="" label="CVV*" variant="standard" style={estilos.dobleUnidad} />
                </div>
            </Paper>
            <Button style={estilos.boton} variant="contained" onClick={() => { setConfirmarCompra(true) }}>Confirmar Compra</Button>
        </div>

    );


};