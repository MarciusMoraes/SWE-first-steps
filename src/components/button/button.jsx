import { Alert, Text, TouchableOpacity,View } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {

    function TesteClick() {
        Alert.alert("Clicou no nosso botão");
    }

    return <View style={styles.container}>
        <TouchableOpacity onPress={TesteClick} style={styles.btn}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    </View>
}

export default Button;