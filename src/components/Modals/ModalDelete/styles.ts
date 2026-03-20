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
     buttonClose: {
          position: 'absolute',
          right: -65,
          top: -5,
     },
     title: {
          fontSize: 24,
          fontWeight: 'bold',
     },
     txtMsgConfirmDelete: {
          fontSize: 18,
          marginBottom: 20,
     },   inputsGroup: {
        width: '100%',
        gap:10,
   },
   label: {
     fontSize: 16,
     marginTop: 10,

   },
   input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
   },
   buttonsGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 20,
   },
});