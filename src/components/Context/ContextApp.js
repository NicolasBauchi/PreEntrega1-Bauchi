import React, { useState } from "react";
import { createContext } from "react";

export const ElContexto = createContext();


export const ElProvider = ({ children }) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [montoTotal, setMontoTotal] = useState(0);
    
    /* Para checkout */
    const [direccionCliente, setDireccionCliente] = useState(false);
    const [finCompra, setFinCompra] = useState(false);
    const [confirmarCompra, setConfirmarCompra] = useState(false);


    const agregarCarrito = (producto, cantidad_producto) => {

        let carro = [];
        carro = [...carrito];


        console.log("agregar carrito context");
        if (isInCarrito(carro, producto) === true) {
            console.log("entro true");


            /*  carro[indice].cantidad_producto += producto.cantidad_producto;
  */
            /* buscar el id del producto y sumar la cantidad */

        } else {
            console.log("false");
            let produ = { ...producto, cantidad_producto };
            carro.push(produ);
        }

        setCarrito(carro);

        setMontoTotal(montoTotal + (cantidad_producto * producto.price));

    }

    function isInCarrito(carro, producto) {
        console.log("funcion is in carrito context");
        let resultado = false;
        carro.forEach(p => {

            if (p.id === producto.id) {
                console.log("is in carrito true");
                resultado = true;

                p.cantidad_producto += cantidad;
            }

        });
        return resultado;
    }


    return (
        <ElContexto.Provider value={{
            cantidad, carrito, agregarCarrito, montoTotal,
            setMontoTotal, setCantidad, finCompra, setFinCompra,
            direccionCliente, setDireccionCliente,
            setConfirmarCompra, confirmarCompra
        }}>
            {children}
        </ElContexto.Provider>
    );
};