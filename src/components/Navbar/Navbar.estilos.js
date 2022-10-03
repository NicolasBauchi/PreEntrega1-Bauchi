const vp = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

export const estilos = {

    container: {
        display: vp.width > 769 ? "flex" : "none",
        alignItems: "center",
        justifyContent: "space-between",
        height: 100,
        width: "100%",
    },
    imagen: {
        height: "90%"
    },
    menus: {
        margin: 10,
        color: "blue"
    }



};