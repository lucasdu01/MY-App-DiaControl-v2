import { View, TouchableOpacity, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { GlicemiaItem } from "../Table"

// tipagem das props do componente Button
type Props = {
    onCreate: (item: GlicemiaItem) => void;			// onCreate é uma função que recebe um item do tipo GlicemiaItem e retorna void, ou seja, não retorna nada. Essa função será chamada quando o usuário clicar no botão para adicionar um novo registro de glicemia.
}

// Componente de botão para adicionar um novo registro de glicemia
export function Button({ onCreate }: Props){
	return(
		<View style={ styles.container}>
			<TouchableOpacity style={styles.buttonAdd} onPress={() => onCreate}>
				<MaterialIcons name="add-circle" color="#FFFFFF" size={32}/>
				<Text style={styles.label}>Adicionar Registro</Text>
			</TouchableOpacity>
		</View>
	)
}				