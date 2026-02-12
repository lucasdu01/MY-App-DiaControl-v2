import { View, TouchableOpacity, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { GlicemiaItem } from "../Table"

type Props = {
    onCreate: (item: GlicemiaItem) => void;
}

export function Button({ onCreate }: Props){
	return(
		<View style={ styles.container}>
			<TouchableOpacity style={styles.buttonAdd} onPress={() => onCreate}>
				<MaterialIcons name="add-circle" color="#FFFFFF" size={25}/>
				<Text style={styles.label}>Adicionar Registro</Text>
			</TouchableOpacity>
		</View>
	)
}				