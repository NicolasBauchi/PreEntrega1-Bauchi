const vp = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}
let colorTexto = "#ECE0D0";
let colorFondoTexto = "#453A3A";
let colorEnlaces = "#D39E7C";

export const estilos = {
    

    container: {
        display: vp.width > 769 ? "flex" : "none",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 100,
        width: "100%",
        backgroundColor: colorFondoTexto,
    },
    imagen: {
        height: 90
    },
    menus: {
        margin: 10,
        textDecoration: "none",
        fontSize: 19,
        color: colorEnlaces,
    },
    titulos:{
        color: colorTexto,
    },



};