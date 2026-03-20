import { View, TouchableOpacity, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { GlicemiaItem } from "../Table"

// tipagem das props do componente Button
type Props = {
    onPress: () => void;		// função que será chamada quando o botão for pressionado para abrir o modal de registro de glicemia
}

// Componente de botão para adicionar um novo registro de glicemia
export function ButtonAdd({ onPress }: Props){
	return(
		<View style={ styles.container}>
			<TouchableOpacity style={styles.buttonAdd} onPress={onPress}>
				<MaterialIcons name="add-circle" color="#FFFFFF" size={32}/>
				<Text style={styles.label}>Adicionar Registro</Text>
			</TouchableOpacity>
		</View>
	)
}				