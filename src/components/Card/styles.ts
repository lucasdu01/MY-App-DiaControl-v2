import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		padding: 0,
		marginHorizontal: 15,
		borderColor: "#316AC6",
		borderWidth: 2,
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
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontWeight: "500",
		color: "#316AC6",
		fontSize: 24,
		margin: 10,
	},
	content: {
		margin: 10,
	}
})