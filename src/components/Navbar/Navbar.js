import React, { useContext } from "react";
import logo from "../../store-512.png";
import { estilos } from "./Navbar.estilos";
import { CartWidget } from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import { ElContexto } from "../Context/ContextApp";

/* Adentro de las llaves de la funcion flecha se escribo el codigo 
correspondiente al componente */
const Navbar = () => {

  const { cantProd } = useContext(ElContexto);

  const estiloCart = {
    number: {
      color: "white",
      fontSize: 16,
      backgroundColor: "red",
      paddingRight: 5,
      paddingLeft: 5,
      borderRadius: 5,
      fontWeight: "bold",
      textDecoration: "none",
      display: "inline",
      justifyContent: "center",
    }
  }

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
        <>
          <CartWidget />
          {cantProd > 0 ? <span style={estiloCart.number}>{cantProd}</span> : null}
        </>
      </Link>
    </header>
  );
};

export default Navbar;
