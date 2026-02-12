import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	table:{
		flex: 1,
	},
    tableHeader: {
        flexDirection: "row",
        width: "100%",
		justifyContent: "center",
        backgroundColor: "#EAF2FF",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#C5D9FF",
    },
    headerCell: {
        flex: 1,
        fontWeight: "bold",
        color: "#1E5DBB",
        fontSize: 14,
        textAlign: "center",
    },
    tableRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 1,        
		borderBottomColor: "#C5D9FF"
    },
    cell: {
		flex: 1,
    },
    cellText: {
		textAlign: "center",
		padding: 5,
    },
    cellActions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
    },
});
