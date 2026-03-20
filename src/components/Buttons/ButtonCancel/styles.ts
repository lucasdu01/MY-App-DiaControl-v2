import { StyleSheet } from "react-native";
import { ButtonCancel } from ".";

export const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '40%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCancel: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#717171",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        color: '#fff',
        fontSize: 20,
    }
})
