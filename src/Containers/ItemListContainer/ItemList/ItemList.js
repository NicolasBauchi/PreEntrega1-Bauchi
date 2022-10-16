import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
    const estilos = {
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
        }
    }

    return (
        <div style={estilos.container}>

            {productos.map((producto) => {
              return  (<Item key={producto.id} producto={producto} />)
            })}

        </div>
    );

}