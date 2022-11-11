import React, { useContext } from 'react';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ElContexto } from '../../../components/Context/ContextApp';



export const Direccionform = () => {

    const { setDireccionCliente, setBuyer } = useContext(ElContexto);

    function pasarAComprar() {
        const nombre = document.getElementById("txt_nombre").innerText;
        const apellido = document.getElementById("txt_apellido").innerText;
        const direccion = document.getElementById("txt_direccion").innerText;
        const ciudad = document.getElementById("txt_ciudad").innerText;
        const provincia = document.getElementById("txt_provincia").innerText;
        const cp = document.getElementById("txt_cp").innerText;
        const pais = document.getElementById("txt_pais").innerText;

        setBuyer({ nombre, apellido, direccion, ciudad, provincia, cp, pais });

        setDireccionCliente(true);
    };

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
                    <TextField id="txt_nombre" className='txt' required label="Nombre" variant="standard" style={estilos.dobleUnidad} />
                    <TextField id="txt_apellido" className='txt' required label="Apellido" variant="standard" style={estilos.dobleUnidad} />
                </div>

                <div style={estilos.simple}>
                    <TextField id="txt_direccion" className='txt' required label="Direccion" variant="standard" style={estilos.simpleUnidad} />
                </div>

                <div style={estilos.doble}>
                    <TextField id="txt_ciudad" className='txt' required label="Ciudad" variant="standard" style={estilos.dobleUnidad} />
                    <TextField id="txt_provincia" className='txt' label="Provincia" variant="standard" style={estilos.dobleUnidad} />
                </div>

                <div style={estilos.doble}>
                    <TextField id="txt_cp" className='txt' label="Codigo postal" variant="standard" style={estilos.dobleUnidad} />
                    <TextField id="txt_pais" className='txt' required label="Pais" variant="standard" style={estilos.dobleUnidad} />
                </div>
            </Paper>
            <Button style={estilos.boton} variant="contained" onClick={() => { pasarAComprar() }}>Siguiente</Button>
        </div>

    );


};