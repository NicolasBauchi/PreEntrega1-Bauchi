import Context from "@mui/base/TabsUnstyled/TabsContext";
import React, { useState } from "react";
import { createContext } from "react";

export const ElContexto = createContext();


export const ElProvider = ({ children }) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [montoTotal, setMontoTotal] = useState(0);

    const agregarCarrito = (producto, cantidad_producto) => {
        setCarrito([...carrito, { ...producto, cantidad_producto }]);
        /* setCantidad(cantidad + cantidad_producto); */
        setMontoTotal(montoTotal + (cantidad_producto * producto.price));
    }


    return (
        <ElContexto.Provider value={{ cantidad, carrito, agregarCarrito, montoTotal, setMontoTotal }}>
            {children}
        </ElContexto.Provider>
    );
};