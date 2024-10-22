import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {

    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh" // Isso garante que o container ocupe toda a altura da tela
    },

    btn: {
        width: "45%",
        backgroundColor: COLORS.purple,
        borderRadius: 6,
        padding: 12,
        marginTop: 10,
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.3, // Opacidade da sombra
        shadowRadius: 4, // Raio de desfoque
        elevation: 5,
    },

    text: {
        color: "#fff",
        fontSize: FONT_SIZE.md,
        textAlign: "center"
    }

}