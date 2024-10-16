import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between",
    },
    containerLogo: {
        alignItems: "center",
    },
    logo: {
        width: 210,
        height: 60
    },
    containerInput: {
        marginBottom: 15,
        
    },
    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        elevation: 1
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    footerText: {
        color: COLORS.gray1
    },
    footerLink: {
        color: COLORS.purple
    }

}