import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ElContexto } from "../../components/Context/ContextApp";
import { TablaDatos } from "../CartView/TablaDatos/TablaDatos";
import { Checkout } from "../CartView/CheckOut/Checkout";


let colorTexto = "#ECE0D0";
let colorFondoTexto = "#453A3A";

export const Carro = () => {
    const { carrito, finCompra } = useContext(ElContexto);

    const estilo = {
        th1: {
            fontWeight: "bold",
            textAlign: "center",
        }
    }
    
    return (
        <>
            {finCompra == true ? <Checkout /> :
                carrito.length > 1 ?
                    <TablaDatos />
                    : <h1 style={estilo.th1} >OOPS! No cargaste productos. Podés <Link to="/">volver</Link> para cargar.</h1>}
        </>
    );
};