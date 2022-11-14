import React, { useState } from "react";
import { createContext } from "react";

export const ElContexto = createContext();


export const ElProvider = ({ children }) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [montoTotal, setMontoTotal] = useState(0);
    /* Numero de carrito */
    const [cantProd, setCantProd] = useState(0);

    /* Para checkout */
    const [direccionCliente, setDireccionCliente] = useState(false);
    const [finCompra, setFinCompra] = useState(false);
    const [confirmarCompra, setConfirmarCompra] = useState(false);

    /* Datos del comprador */
    const [buyer, setBuyer] = useState({});


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
        let cantEnCarrito = carro.length;
        setCarrito(carro);
        setCantProd(cantEnCarrito);

        setMontoTotal(parseFloat((montoTotal + (cantidad_producto * producto.price)).toFixed(2)));

    }

    function eliminarProducto(id) {

        let carro = [];
        carro = [...carrito];

        //Borro el producto elegido
        const filtrado = carro.filter((item) => item.id !== id)
        console.log(filtrado);
        //Calculo el nuevo monto
        var nuevoMontoTotal = 0;
        filtrado.forEach(el => {
            nuevoMontoTotal += (el.price * el.cantidad_producto);
        });
        setCarrito(filtrado);
        setMontoTotal(nuevoMontoTotal);
    };

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
            setConfirmarCompra, confirmarCompra,
            eliminarProducto, buyer, setBuyer,
            cantProd, setCantProd
        }}>
            {children}
        </ElContexto.Provider>
    );
};