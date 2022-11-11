import React, { useContext, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ElContexto } from '../../../components/Context/ContextApp';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { BotonBorrar } from "../../../components/BotonBorrar/BotonBorrar";


let colorTexto = "#ECE0D0";
let colorFondoTexto = "#453A3A";

export const TablaDatos = () => {

    const { carrito, montoTotal, setFinCompra } = useContext(ElContexto);
    const [montoFinal, setMontoFinal] = useState(montoTotal);

    const estilosTabla = {
        posicion: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 50,
        },
        container: {
            width: "75%",
            backgroundColor: colorFondoTexto,
        },
        tcImg: {
            width: 150,
            height: 100,
        },
        titulos: {
            fontSize: 18,
            color: colorTexto,
        },
        items: {
            fontSize: 14,
            color: colorTexto,
        },
        th1: {
            fontSize: 26,
            fontWeight: "bold",
        },
        botonDiv: {
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            marginTop: 30,
            marginBottom: 30,
            width: "75%",
        },
        boton: {
            paddingTop: 10,
            paddingBottom: 10,
            maxWidth: 300,
        },
        monto: {
            width: 150,
            marginBottom: 20,
        },
    };

    return (
        <>
            <div style={estilosTabla.posicion}>
                <h1 style={estilosTabla.th1}>Productos en tu carrito</h1>
                <TableContainer component={Paper} style={estilosTabla.container}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={estilosTabla.titulos}>Imagen</TableCell>
                                <TableCell align="center" style={estilosTabla.titulos}>Producto</TableCell>
                                <TableCell align="center" style={estilosTabla.titulos}>Precio</TableCell>
                                <TableCell align="center" style={estilosTabla.titulos}>Cantidad</TableCell>
                                <TableCell align="center" style={estilosTabla.titulos}>Sub Total</TableCell>
                                <TableCell align="center" style={estilosTabla.titulos}>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {carrito.map((produ) => (
                                <TableRow
                                    key={produ.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        <img src={produ.image} style={estilosTabla.tcImg} alt={produ.title} />
                                    </TableCell>
                                    <TableCell align="center" style={estilosTabla.items}>{produ.title}</TableCell>
                                    <TableCell align="center" style={estilosTabla.items}>${produ.price}</TableCell>
                                    <TableCell align="center" style={estilosTabla.items}>{produ.cantidad_producto}</TableCell>
                                    <TableCell align="center" style={estilosTabla.items}>${(produ.price * produ.cantidad_producto)}</TableCell>
                                    <TableCell align="center" style={estilosTabla.items}><BotonBorrar idItem={produ.id} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div style={estilosTabla.botonDiv}>
                    <TextField style={estilosTabla.monto} label="Total a pagar"
                        defaultValue={"$ " + montoFinal.toFixed(2)} InputProps={{ readOnly: true }} />

                    <Button style={estilosTabla.boton} variant="contained"
                        onClick={() => { setFinCompra(true) }}>Proceder con la compra</Button>
                </div>
            </div>

        </>
    );
}