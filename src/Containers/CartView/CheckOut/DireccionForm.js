import React, { useContext } from 'react';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ElContexto } from '../../../components/Context/ContextApp';



export const Direccionform = () => {

    const { setDireccionCliente } = useContext(ElContexto);

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
        simple: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 40,

        },
        simpleUnidad: {
            width: 520,
        },
        doble: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 20,
            marginBottom: 40,
        },
        dobleUnidad: {
            width: 250,
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

                <h1>Dirección de envío</h1>
                <div style={estilos.doble}>
                    <TextField id="" label="Nombre" variant="standard" style={estilos.dobleUnidad} />
                    <TextField id="" label="Apellido" variant="standard" style={estilos.dobleUnidad} />
                </div>

                <div style={estilos.simple}>
                    <TextField id="" label="Direccion" variant="standard" style={estilos.simpleUnidad} />
                </div>

                <div style={estilos.doble}>
                    <TextField id="" label="Ciudad" variant="standard" style={estilos.dobleUnidad} />
                    <TextField id="" label="Provincia" variant="standard" style={estilos.dobleUnidad} />
                </div>

                <div style={estilos.doble}>
                    <TextField id="" label="Codigo postal" variant="standard" style={estilos.dobleUnidad} />
                    <TextField id="" label="Pais" variant="standard" style={estilos.dobleUnidad} />
                </div>
            </Paper>
            <Button style={estilos.boton} variant="contained" onClick={() => { setDireccionCliente(true) }}>Siguiente</Button>
        </div>

    );


};