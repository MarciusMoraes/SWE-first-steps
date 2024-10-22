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
        padding: 2
    },
    input: {
        width: '100%',
        marginTop: 5,
        padding: 10,
        elevation: 10, // Para Android
        borderRadius: 10, // Ajuste para o valor desejado
        backgroundColor: "#FFFFFF",
        shadowColor: "#A9A8A9",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        borderWidth: 1, // Se desejar borda visível
        borderColor: '#ccc', // Cor da borda
    },
    
}




/*
marginTop: 5,
        padding: 10,
        elevation: 3,
        borderRadius: 3,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
*/