import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ItemList } from "../ItemListContainer/ItemList/ItemList";
import { ElContexto } from "../../components/Context/ContextApp";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


export const ItemListContainer = ({ greeting }) => {
    let colorTexto = "#ECE0D0";
    const estiloListContainer = {
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorTexto,
        paddingTop: 30,
    };
    /* Contexto: */
    const { setConfirmarCompra, setDireccionCliente, setFinCompra, setCantidad } = useContext(ElContexto);

    const [productos, setProductos] = useState([]);
    const [cargas, setCargas] = useState(true);

    const { categoryId } = useParams();
    let cat_nombre_esp = "";
    if (categoryId === "electronicos") {
        cat_nombre_esp = "electronics";
    } else if (categoryId === "joyeria") {
        cat_nombre_esp = "jewelery";
    } else if (categoryId === "ropa-hombre") {
        cat_nombre_esp = "men's clothing";
    } else if (categoryId === "ropa-mujer") {
        cat_nombre_esp = "women's clothing";
    }

    /* estas url son para conectar a Fakestoreapi:
    const URL_BASE = "https://fakestoreapi.com/products";
    const URL_FULL = `${URL_BASE}/category/${cat_nombre_esp}`; */



    useEffect(() => {
        const getProductos = async () => {

            try {

                const db = getFirestore();
                let q;

                categoryId ? q = query(collection(db, "productos"), where("category", "=", categoryId)) : q = query(collection(db, "productos"));


                getDocs(q).then((snapshot) => {
                    setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                });

            } catch (error) {
                console.log(error);
            } finally {
                setCargas(false);
            }

            /*  Este código es para conectarse a la fakeapi directo. 
            Es reemplazado por conexion a Firebase.
             try {
 
                 const datos = await fetch(categoryId ? URL_FULL : URL_BASE);
                 const res = await datos.json();
                 setProductos(res);
 
             } catch (error) {
                 console.log(error);
             } finally {
                 setCargas(false);
             } */
        }
        getProductos();

        clearCheckout();

    }, [categoryId]);

    function clearCheckout() {
        setDireccionCliente(false);
        setConfirmarCompra(false);
        setFinCompra(false);
        setCantidad(0);
    };


    return (
        <div style={estiloListContainer}>
            {<>{cargas ? <h1>{greeting}  Cargando!! </h1> : <ItemList productos={productos} />}</>}
        </div>
    )


}


