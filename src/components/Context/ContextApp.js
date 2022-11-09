import React, { useState } from "react";
import { createContext } from "react";

export const ElContexto = createContext();


export const ElProvider = ({ children }) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [montoTotal, setMontoTotal] = useState(0);

    const agregarCarrito = (producto, cantidad_producto) => {
        let produ = { ...producto, cantidad_producto };
        let carro = [];
        carro = [...carrito];
        carro.push(produ);

        setCarrito(carro);

        setMontoTotal(montoTotal + (cantidad_producto * producto.price));

    }


    return (
        <ElContexto.Provider value={{ cantidad, carrito, agregarCarrito, montoTotal, setMontoTotal, setCantidad }}>
            {children}
        </ElContexto.Provider>
    );
};