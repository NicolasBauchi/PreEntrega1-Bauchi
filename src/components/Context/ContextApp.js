import React, { useState } from "react";
import { createContext } from "react";

export const ElContexto = createContext();


export const ElProvider = ({ children }) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [montoTotal, setMontoTotal] = useState(0);

    const agregarCarrito = (producto, cantidad_producto) => {
        console.log(producto);
        console.log("cantidad: " + cantidad_producto);
        setCarrito([...carrito, { ...producto, cantidad_producto }]);
        /* setCantidad(cantidad + cantidad_producto); */
        setMontoTotal(montoTotal + (cantidad_producto * producto.price));
        console.log("entro a agregar carrito context");
        console.log("setCarrito: en carro hay: " + carrito.length);
        console.log("monto total: " + montoTotal);
    }


    return (
        <ElContexto.Provider value={{ cantidad, carrito, agregarCarrito, montoTotal, setMontoTotal, setCantidad }}>
            {children}
        </ElContexto.Provider>
    );
};