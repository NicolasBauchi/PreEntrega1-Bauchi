import React from "react";
import logo from "../../logo.svg";
import { estilos } from "./Navbar.estilos";

/* Adentro de las llaves de la funcion flecha se escribo el codigo 
correspondiente al componente */
const Navbar = () => {
    const menu = [
        { nombre: "Productos", id: 0, ruta: "#" },
        { nombre: "Nosotros", id: 1, ruta: "#" },
        { nombre: "Contacto", id: 2, ruta: "#" }];

    return (
        <header>

            <img src={logo} />
            <nav>
                {
                    menu.map((menu) => {
                        return <a key={menu.id} href={menu.ruta} style={estilos.menus}>{menu.nombre}</a>
                    })
                }
            </nav>

        </header>);

}

export default Navbar;