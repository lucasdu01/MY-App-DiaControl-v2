import { View, TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

type Props = {
    onPress: () => void;	// função que será chamada quando o botão for pressionado
}

export function ButtonCancel( {onPress}: Props){
    return(
        <View style={ styles.container}>
            <TouchableOpacity style={styles.buttonCancel} onPress={onPress}>
                <Text style={styles.label}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    )
}