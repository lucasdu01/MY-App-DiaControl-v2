import { Text, ScrollView, View, TouchableOpacity, FlatList } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"

import { styles } from "./styles"
import { ReactNode } from "react"
import { Table } from "../Table"

type Props = {
	title: string
	children: ReactNode
	hasTable?: boolean
}

export function Card( {title, children, hasTable=false}: Props ){
	const [isExpanded, setIsExpanded] = useState(false)

	return(
		<View style={styles.container}>
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
				<View style={hasTable ? [styles.content, {margin:0}] : styles.content}>
                    {children}
                </View>
			)}
		</View>
	)
}