import React from "react";
import logo from "../../logo.svg";
import { estilos } from "./Navbar.estilos";
import { CartWidget } from "./CartWidget";

/* Adentro de las llaves de la funcion flecha se escribo el codigo 
correspondiente al componente */
const Navbar = ({ nombreUsuario }) => {
    const menu = [
        { nombre: "Productos", id: 0, ruta: "#" },
        { nombre: "Nosotros", id: 1, ruta: "#" },
        { nombre: "Contacto", id: 2, ruta: "#" }];

    return (
        <header style={estilos.container}>

            <img src={logo} style={estilos.imagen} />
            <h1>Tienda Nico Bauchi React</h1>
            <h2>Bienvenido {nombreUsuario}</h2>

            <nav>
                {
                    menu.map((menu) => {
                        return <a key={menu.id} href={menu.ruta} style={estilos.menus}>{menu.nombre}</a>
                    })
                }
            </nav>
            <CartWidget />
        </header>);

}

export default Navbar;