import React, { useContext } from 'react';
import { Direccionform } from '../CheckOut/DireccionForm';
import { ElContexto } from '../../../components/Context/ContextApp';
import { MetodoPago } from './MetodoPago';

export const Checkout = () => {

    const { direccionCliente } = useContext(ElContexto);


    return (
        <>
            {direccionCliente == false ? <Direccionform /> : <MetodoPago/>}
        </>
    );

};