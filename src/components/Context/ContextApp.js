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

        if (isInCarrito(carro, producto) === true) {
            /* Reseteo cantidad */
            setCantidad(0);
        } else {
            let produ = { ...producto, cantidad_producto };
            carro.push(produ);
        }

        setCarrito(carro);

        setMontoTotal(montoTotal + (cantidad_producto * producto.price));

    }

    function isInCarrito(carro, producto) {
        let resultado = false;
        carro.forEach(p => {

            if (p.id === producto.id) {
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