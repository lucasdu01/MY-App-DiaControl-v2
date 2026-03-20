import { View, TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

export function ButtonDelete(){
    return(
        <View style={ styles.container}>
            <TouchableOpacity style={styles.buttonDelete}>
                <Text style={styles.label}>Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}