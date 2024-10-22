import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-arround",
    },
    containerLogo: {
        alignItems: "center",
        marginTop: 100,
        marginBottom: 60
    },
    logo: {
        width: "85%",
        height: 100
    },
    topTextInput: {
        color: COLORS.purple,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 10
    },
    containerInput: {
        marginTop: 10,
        marginBottom: 0,
    },
    input: {
        width: '100%',
        marginTop: 5,
        padding: 10,
        elevation: 10, // Para Android
        borderRadius: 10, // Ajuste para o valor desejado
        backgroundColor: "#FFFFFF",
        shadowColor: COLORS.black,
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        borderWidth: 1, // Se desejar borda visível
        borderColor: '#ccc', // Cor da borda
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 230
    },
    footerText: {
        color: COLORS.gray1
    },
    footerLink: {
        color: COLORS.purple
    }

}