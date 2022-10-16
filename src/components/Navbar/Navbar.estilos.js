const vp = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

export const estilos = {

    container: {
        display: vp.width > 769 ? "flex" : "none",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 100,
        width: "100%",
        backgroundColor: "#2A296A"
    },
    imagen: {
        height: 90
    },
    menus: {
        margin: 10,
        color: "#9ECCEA",
        textDecoration: "none",
        fontSize: 18,
    },
    titulos:{
        color: "#9ECCEA"
    },



};