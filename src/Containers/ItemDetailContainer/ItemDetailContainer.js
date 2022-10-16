import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ greeting }) => {

    const [producto, setProducto] = useState([]);
    const [carga, setCarga] = useState(true);

    useEffect(() => {
        const getProductos = async () => {

            try {

                const resultado = await fetch('https://fakestoreapi.com/products/1');
                const datos = await resultado.json();
                setProducto(datos);
                console.log(datos);
                
            } catch (error) {
                console.log(error);
            } finally {
                setCarga(false);
            }
        }
        getProductos();

    }, []);


    return (
        <div>
            <h1>{greeting}</h1>
            {<> {carga ? <h1>Cargando!</h1> : <ItemDetail producto={producto} />}  </>}
        </div>
    )
}