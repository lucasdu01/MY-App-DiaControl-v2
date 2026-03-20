import { View, TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

export function ButtonSave(){
    return(
        <View style={ styles.container}>
            <TouchableOpacity style={styles.buttonSalvar}>
                <Text style={styles.label}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}