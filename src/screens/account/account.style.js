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
    },
    input: {
        marginTop: 5,
        padding: 10,
        elevation: 2,
        borderRadius: 3,
        shadowColor: COLORS.gray1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    registerBtn: {
        marginTop: 10,
    }
}