import React, { useState } from "react";
import { Button } from "@mui/material";


export default function ItemQuantitySelector() {

    const [contador, setContador] = useState(0);

    function cantidadProd(operacion) {
        if (operacion === '+') {
            if (contador !== 0) {
                
            }
            setContador(contador + 1)
        } else {
            if (contador !== 0) {
                setContador(contador - 1)
            }
           
        }

    }
    let colorBotones = "#80A9BC";
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
            <input type={"text"} style={estilo.input} value={contador} readOnly></input>
            {/* <TextField id="outlined-basic" variant="filled" size="small" style={estilo.input}/> */}
            <Button size="medium" color="primary" variant="contained" style={estilo.btn} onClick={() => cantidadProd("+")}>+</Button>
        </div>


    );


}