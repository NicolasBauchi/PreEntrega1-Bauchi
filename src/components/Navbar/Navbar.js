import React from "react";
import logo from "../../store-512.png";
import { estilos } from "./Navbar.estilos";
import { CartWidget } from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

/* Adentro de las llaves de la funcion flecha se escribo el codigo 
correspondiente al componente */
const Navbar = () => {
  const menu = [
    { nombre: "Electronicos", id: 0, ruta: "/categoria/electronicos" },
    { nombre: "Joyeria", id: 1, ruta: "/categoria/joyeria" },
    { nombre: "Ropa de Hombre", id: 2, ruta: "/categoria/ropa-hombre" },
    { nombre: "Ropa de mujer", id: 3, ruta: "/categoria/ropa-mujer" },
  ];
  
  return (
    <header style={estilos.container}>
      <Link to="/">
        <img src={logo} style={estilos.imagen} alt="Tienda" />
      </Link>

      <h1 style={estilos.titulos}>Tienda Nico Bauchi</h1>
      {/* <h2 style={estilos.titulos}>Bienvenido {nombreUsuario}</h2> */}

      <nav>
        {menu.map((menu) => {
          return (
            <NavLink to={menu.ruta} key={menu.id} style={estilos.menus}>
              {menu.nombre}
            </NavLink>
          );
        })}
      </nav>
      <Link to="/carrito">
        <CartWidget />
      </Link>
    </header>
  );
};

export default Navbar;
