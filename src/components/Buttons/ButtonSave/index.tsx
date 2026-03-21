import { View, TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

type Props = {
    onPress: () => void; // Função para lidar com o evento de clique no botão
}
export function ButtonSave({ onPress }: Props){
    return(
        <View style={ styles.container}>
            <TouchableOpacity style={styles.buttonSalvar} onPress={onPress}>
                <Text style={styles.label}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}