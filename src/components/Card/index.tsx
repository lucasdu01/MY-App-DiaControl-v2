import { Text, ScrollView, View, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"

import { styles } from "./styles"
import { ReactNode } from "react"

type Props = {
	title: string
	children: ReactNode
}

export function Card( {title, children}: Props ){
	const [isExpanded, setIsExpanded] = useState(false)

	return(
		<ScrollView style={styles.container}>
			<TouchableOpacity 
				style={styles.headerCard}
				onPress={() => setIsExpanded(!isExpanded)}
			>
				<Text style={styles.title}>{title}</Text>
				<MaterialIcons
					name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
					color="#316AC6"
					size={40}
				/>
			</TouchableOpacity>
			{isExpanded && (
				<Text>{children}</Text>
			)}
		</ScrollView>
	)
}