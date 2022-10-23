import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ({ greeting }) => {

    const [producto, setProducto] = useState([]);
    const [carga, setCarga] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const getProductos = async () => {
            const URL = 'https://fakestoreapi.com/products/';
            const URL_ID = URL + id;
            try {
                const resultado = await fetch(id ? URL_ID : URL);
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

    }, [id]);


    return (
        <div>
            <h1>{greeting}</h1>
            {<> {carga ? <h1>Cargando! itemDetail</h1> : <ItemDetail producto={producto} />}  </>}
        </div>
    )
}