import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ElContexto } from '../../../components/Context/ContextApp';

/* function crearDato(img, nombre, precio, cantidad, subTotal) {
    return { img, nombre, precio, cantidad, subTotal };
} */

/* const lineas = []; */

let colorTexto = "#ECE0D0";
let colorFondoTexto = "#453A3A";

export const TablaDatos = () => {

    const { carrito, montoTotal } = useContext(ElContexto);

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
    };

    return (
        <div style={estilosTabla.posicion}>
            <h1 style={estilosTabla.th1}>Productos en tu carrito</h1>
            <TableContainer component={Paper} style={estilosTabla.container}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={estilosTabla.titulos}>Imagen</TableCell>
                            <TableCell align="right" style={estilosTabla.titulos}>Producto</TableCell>
                            <TableCell align="right" style={estilosTabla.titulos}>Precio</TableCell>
                            <TableCell align="right" style={estilosTabla.titulos}>Cantidad</TableCell>
                            <TableCell align="right" style={estilosTabla.titulos}>Sub Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {carrito.map((produ) => (
                            <TableRow
                                key={produ.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={produ.image} style={estilosTabla.tcImg} alt={produ.title} />
                                </TableCell>
                                <TableCell align="right" style={estilosTabla.items}>{produ.title}</TableCell>
                                <TableCell align="right" style={estilosTabla.items}>${produ.price}</TableCell>
                                <TableCell align="right" style={estilosTabla.items}>{produ.cantidad_producto}</TableCell>
                                <TableCell align="right" style={estilosTabla.items}>${(produ.price * produ.cantidad_producto)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}