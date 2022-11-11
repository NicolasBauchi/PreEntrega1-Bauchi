import React, { useContext } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import { ElContexto } from "../Context/ContextApp";

export const BotonBorrar = ({ idItem }) => {

    const { eliminarProducto } = useContext(ElContexto);


    return (

        <Button id={idItem} variant="contained" startIcon={<DeleteIcon color=""/>}
            onClick={() => { eliminarProducto(idItem) }}></Button>
    );

};