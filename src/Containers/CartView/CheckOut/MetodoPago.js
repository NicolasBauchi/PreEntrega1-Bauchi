import React, { useContext, useEffect } from 'react';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ElContexto } from '../../../components/Context/ContextApp';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


export const MetodoPago = () => {

    const { confirmarCompra, setConfirmarCompra, buyer, montoTotal, carrito } = useContext(ElContexto);

    function finalizarCompra() {

        const nombreTarjeta = document.getElementById("txt_nombreTarjeta").innerText;
        const numeroTarjeta = document.getElementById("txt_numTarjeta").innerText;
        const fecha = document.getElementById("txt_fecha").innerText;
        const cvv = document.getElementById("txt_cvv").innerText;


        const ordenDeCompra = {
            comprador: { ...buyer },
            items: [...carrito],
            total: montoTotal,
            datosPago: { nombreTarjeta, numeroTarjeta, fecha, cvv }
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "ordenes");

        const realizado = addDoc(ordersCollection, ordenDeCompra).then(({ id }) => {

            console.log("terminó proceso de compra -> " + id);
            alert("Se realizó la compra con el ID: " + id);

        });

    }

    /* useEffect(() => {

        const ordenDeCompra = {
            comprador: { ...buyer },
            items: [...carrito],
            total: montoTotal
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "ordenes");

        const realizado = addDoc(ordersCollection, ordenDeCompra).then(({ id }) => {

            console.log("terminó proceso de compra -> " + id);
            alert("Se realizó la compra con el ID: " + id);

        }); /* setOrderId(id) */


    /*  return () => {
         console.log("terminó proceso de compra -> " + realizado.id);
         alert("Se realizó la compra con el ID: " + realizado.id);
     
}, [confirmarCompra]); */

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
                    <TextField id="txt_nombreTarjeta" label="Nombre de la tarjeta" variant="standard" style={estilos.dobleUnidad} />
                    <TextField id="txt_numTarjeta" label="Número de la tarjeta" variant="standard" style={estilos.dobleUnidad} />
                </div>

                <div style={estilos.doble}>
                    <TextField id="txt_fecha" label="Fecha de vencimiento" variant="standard" style={estilos.dobleUnidad} />
                    <TextField id="txt_cvv" label="CVV*" variant="standard" style={estilos.dobleUnidad} />
                </div>
            </Paper>
            <Button style={estilos.boton} variant="contained" onClick={() => { finalizarCompra() }}>Confirmar Compra</Button>
        </div>

    );


};