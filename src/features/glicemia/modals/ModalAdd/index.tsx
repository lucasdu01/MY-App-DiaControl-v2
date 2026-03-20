import { View, Text, TextInput, Button, TouchableOpacity, Modal } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    modalAddVisible: boolean;	// estado que controla a visibilidade do modal de registro de glicemia
    closeModalAdd: () => void;		// função que será chamada para fechar o modal de registro de glicemia
}

export function ModalAdd( {modalAddVisible, closeModalAdd} : Props) {

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalAddVisible}
            onRequestClose={() => closeModalAdd()}
        >

            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.headerForm}>
                        <Text style={styles.title}>Adicionar Registro</Text>
                        <TouchableOpacity onPress={() => closeModalAdd()}>
                            <MaterialIcons name="close" size={32} style={styles.closeButton} />
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.input} placeholder="Período" />
                    <TextInput style={styles.input} placeholder="Data" />
                    <TextInput style={styles.input} placeholder="Hora" />
                    <TextInput style={styles.input} placeholder="Valor (mg/dl)" keyboardType="numeric" />
                    <TextInput style={styles.input} placeholder="Observação" multiline />

                    <View style={styles.buttonsGroup}>
                        <Button title="Salvar" onPress={() => {}} />
                        <Button title="Cancelar" onPress={() => closeModalAdd()} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}