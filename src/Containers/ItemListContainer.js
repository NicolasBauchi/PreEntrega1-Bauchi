import React from "react";


export const ItemListContainer = ({ greeting, mensaje }) => {
    return (
        <>
            <h3>{greeting}</h3>
            <h3>{mensaje}</h3>
        </>);
}