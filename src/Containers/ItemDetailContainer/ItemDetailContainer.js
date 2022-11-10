import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDoc, getFirestore, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const [carga, setCarga] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const getProductos = async () => {
            const db = getFirestore();

            /* codigo conexion a FakestoreApi
            const URL = 'https://fakestoreapi.com/products/';
            const URL_ID = URL + id; */

            try {
                const docBuscar = doc(collection(db, "productos"), id);
                /*  q = query(collection(db, "productos"), where("id", "==", id)); */

                getDoc(docBuscar).then((snapshot) => {
                    setProducto({ id: snapshot.id, ...snapshot.data() });
                });

            } catch (error) {
                console.log(error);
            } finally {
                setCarga(false);
            }


            /*codigo conexion a FakestoreApi
              const URL = 'https://fakestoreapi.com/products/';
             const URL_ID = URL + id;
             try {
                 const resultado = await fetch(id ? URL_ID : URL);
                 const datos = await resultado.json();
                 setProducto(datos);
 
             } catch (error) {
                 console.log(error);
             } finally {
                 setCarga(false);
             } */
        }
        getProductos();

    }, [id]);


    return (
        <div id="itemDetailContainer">
            {<> {carga ? <h1>Cargando...</h1> : <ItemDetail producto={producto} />}  </>}
        </div>
    )
}