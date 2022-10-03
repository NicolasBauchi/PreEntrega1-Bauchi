import React from "react";


export const ItemListContainer = ({ greeting, mensaje }) => {
    const estiloListContainer = {
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };


    return (
        <div style={estiloListContainer}>
            <h3>{greeting}</h3>
            <h3>{mensaje}</h3>
        </div>
    )


}


