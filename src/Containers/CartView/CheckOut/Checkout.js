import React, { useContext } from 'react';
import { Direccionform } from '../CheckOut/DireccionForm';
import { ElContexto } from '../../../components/Context/ContextApp';

export const Checkout = () => {

    const { setDireccionCliente, direccionCliente } = useContext(ElContexto);


    return (
        <>
            {direccionCliente == false ? <Direccionform /> : null /* El otro listado - metodo de pago tengo que crearlo */}

        </>
    );

};