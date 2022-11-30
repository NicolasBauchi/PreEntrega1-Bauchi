import React, { useContext } from "react";
import { Button } from "@mui/material";
import { ElContexto } from "../Context/ContextApp";


export default function ItemQuantitySelector({ stock }) {
    const { cantidad, setCantidad } = useContext(ElContexto);

    function cantidadProd(operacion) {
        if (operacion === '+' && cantidad < Number(stock)) {
            setCantidad(cantidad + 1);

        } else if (operacion === '-' && cantidad !== 0) {
            setCantidad(cantidad - 1);
        }
    }
    const estilo = {
        container: {
            width: 200,
            height: 40,
            display: "flex",
            flexDirection: "row",
            gap: 7,
        },
        btn: {
            fontWeight: "bold",
            fontSize: 20,
            height: 45,
        },
        input: {
            height: 40,
            width: 45,
            textAlign: "center",
            fontSize: 20,
        }

    };

    return (

        <div style={estilo.container}>
            <Button size="medium" color="primary" variant="contained" style={estilo.btn} onClick={() => cantidadProd("-")}>-</Button>
            <input type={"text"} style={estilo.input} value={cantidad} readOnly></input>
            <Button size="medium" color="primary" variant="contained" style={estilo.btn} onClick={() => cantidadProd("+")}>+</Button>
        </div>


    );


}