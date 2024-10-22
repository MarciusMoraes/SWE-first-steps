import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./login.style.js";
import Button from "../../components/button/button.jsx";

function Login() {
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
            <Text style={styles.topTextInput}>Fazer Login</Text>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true} />
            </View>
            <Button text="Entrar" />
        </View>

        <View style={styles.footer}>
            <Text style={styles.footerText}>Primeiro Acesso. </Text>
            <TouchableOpacity>
                <Text style={styles.footerLink}
                > Cadastre-se.
                </Text>
            </TouchableOpacity>
        </View>

    </View>
}

export default Login;