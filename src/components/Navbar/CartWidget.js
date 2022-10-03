import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () =>{

    const estiloCart = {
        color: "#9ECCEA",
    }

    return (
        <ShoppingCartIcon fontSize="large" color="disabled" style={estiloCart}/>
    )


}