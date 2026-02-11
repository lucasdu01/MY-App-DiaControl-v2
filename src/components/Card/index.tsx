import { Text, ScrollView } from "react-native"

import { styles } from "./styles"
import { ReactNode } from "react"

type Props = {
	title: string
	toggle?: boolean
	children: ReactNode
}

export function Card( {title, toggle = true, children}: Props ){
	return(
		<ScrollView style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text>{children}</Text>
		</ScrollView>
	)
}