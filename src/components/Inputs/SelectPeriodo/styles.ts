import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const styles = StyleSheet.create({
    button: {
      height: 40,
      justifyContent: 'space-between',
      backgroundColor: '#f0f0f0',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 16,
      opacity: 0.7,
      color: '#333',
    },
    options: {
      position: 'absolute',
      top: 40,
      backgroundColor: '#fff',
      width: '100%',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      zIndex: 1,
    },
    optionItem: {
      padding: 10,
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
    },
    textOptionItem: {
      fontSize: 16,
      color: '#333',
    },
       input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
   },

  });