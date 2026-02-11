import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		padding: 15,
		marginHorizontal: 15,
		borderColor: "#316AC6",
		borderWidth: 4,
		borderRadius: 10,

		// --- Configuracao sombra para iOS ---
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84, 

		// --- Configuracao sombra para Android ---
		elevation: 5,
	},
	headerCard: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	title: {
		fontWeight: "bold",
		color: "#316AC6",
		fontSize: 24,
	}
})