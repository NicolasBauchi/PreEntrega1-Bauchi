import React from "react";

export const ItemDetail = ({ producto }) => {

    return (

        <div>
            <img alt={producto.title} src={producto.image} />
            <h1>{producto.title}</h1>
            <p>{producto.description}</p>
            <h4>{producto.price}</h4>
        </div>

    );

}
