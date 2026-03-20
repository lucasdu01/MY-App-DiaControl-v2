import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent:"center",
		alignItems: "center",
		margin: 2,
		backgroundColor: "#EAF2FF",
		borderTopWidth: 1,
		borderColor: "#C5D9FF",
	},
	buttonAdd: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		gap: 10,
		padding: 10,
		margin: 10,
		backgroundColor: "#316AC6",
		borderRadius: 50,
	},
	label: {
		color: "#FFFFFF",
		fontWeight: "500",
	}
})