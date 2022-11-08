import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

let colorBotones = "#80A9BC";
export const CartWidget = () =>{

    const estiloCart = {
        color: colorBotones,
    }

    return (
        <ShoppingCartIcon fontSize="large" style={estiloCart}/>
    )


}