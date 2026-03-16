import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.35)",
        justifyContent: "center",
        padding: 16,
    },
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#316AC6",
        marginBottom: 12,
        textAlign: "center",
    },
    inputGroup: {
        marginBottom: 12,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#316AC6",
        marginBottom: 6,
    },
    picker: {
        borderWidth: 1,
        borderColor: "#C5D9FF",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: "#F7FAFF",
    },
    pickerText: {
        color: "#1E5DBB",
        fontSize: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: "#C5D9FF",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        color: "#1F1F1F",
        backgroundColor: "#FFFFFF",
    },
    buttonGroup: {
        flexDirection: "row",
        gap: 10,
        marginTop: 8,
    },
    button: {
        flex: 1,
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: "center",
    },
    cancelButton: {
        backgroundColor: "#9E9E9E",
    },
    saveButton: {
        backgroundColor: "#316AC6",
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "600",
    },
});