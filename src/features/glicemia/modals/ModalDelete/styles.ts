import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
   },
   container: {     
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        padding: 20,
   },
   headerForm: {
        flexDirection: 'row',
        justifyContent: 'center', 
        width: '100%',
        marginBottom: 20,
   },
   closeButton: {
        position: 'absolute',
        right: -65,
        top: -5,
   },
   title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
   },
   msgConfirm: {
        fontSize: 18,
        marginBottom: 20,
   },
   input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
   },
   buttonsGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
   },
});