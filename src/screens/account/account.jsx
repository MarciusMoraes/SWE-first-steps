import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./account.style.js";
import Button from "../../components/button/button.jsx";

function Account() {
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
            <Text style={styles.topTextInput}>Criar Conta</Text>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Confirmar Senha"
                    style={styles.input}
                    secureTextEntry={true} />
            </View>
            <View style={styles.registerBtn}>
                <Button text="Cadastrar" />
            </View>
        </View>

    </View>
}


export default Account;