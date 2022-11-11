import React, { useContext, useRef } from 'react';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ElContexto } from '../../../components/Context/ContextApp';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


export const MetodoPago = () => {

    const { buyer, montoTotal, carrito } = useContext(ElContexto);


    var nombreTarjeta = "";
    var numeroTarjeta = "";
    var fecha = "";
    var cvv = "";

    function handlerNombre(event) {
        nombreTarjeta = event.target.value;
    }
    function handlerNumero(event) {
        numeroTarjeta = event.target.value;
    }
    function handlerFecha(event) {
        fecha = event.target.value;
    }
    function handlerCvv(event) {
        cvv = event.target.value;
    }


    function finalizarCompra() {

        const datos = { nombreTarjeta, numeroTarjeta, fecha, cvv };

        const ordenDeCompra = {
            comprador: { ...buyer },
            items: [...carrito],
            total: montoTotal,
            datosPago: { ...datos }
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "ordenes");
        /* const realizado =  */
        addDoc(ordersCollection, ordenDeCompra).then(({ id }) => {

            console.log("terminó proceso de compra -> " + id);
            alert("Se realizó la compra con el ID:  " + id);

        });

    }

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
                    <TextField id="txt_nombreTarjeta" onChange={(event) => { handlerNombre(event) }}
                        label="Nombre de la tarjeta" variant="standard" style={estilos.dobleUnidad} />

                    <TextField id="txt_numTarjeta" onChange={(event) => { handlerNumero(event) }}
                        label="Número de la tarjeta" variant="standard" style={estilos.dobleUnidad} />
                </div>

                <div style={estilos.doble}>
                    <TextField id="txt_fecha" onChange={(event) => { handlerFecha(event) }}
                        label="Fecha de vencimiento" variant="standard" style={estilos.dobleUnidad} />

                    <TextField id="txt_cvv" onChange={(event) => { handlerCvv(event) }}
                        label="CVV*" variant="standard" style={estilos.dobleUnidad} />
                </div>
            </Paper>
            <Button style={estilos.boton} variant="contained" onClick={() => { finalizarCompra() }}>Confirmar Compra</Button>
        </div>

    );


};