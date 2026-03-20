import { View, Text, Button, TouchableOpacity, TextInput, Modal } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    modalDeleteVisible: boolean;	// estado que controla a visibilidade do modal de confirmação de exclusão
    closeModalDelete: () => void;		// função que será chamada para fechar o modal de confirmação de exclusão
}

export function ModalDelete({ modalDeleteVisible, closeModalDelete } : Props) {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalDeleteVisible}
            onRequestClose={() => closeModalDelete()}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.headerForm}>
                        <Text style={styles.title}>Remover Registro</Text>
                        <TouchableOpacity onPress={() => closeModalDelete()}>
                            <MaterialIcons name="close" size={32} style={styles.buttonClose} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.txtMsgConfirmDelete}>Tem certeza que deseja remover este registro? </Text>

                    <TextInput style={styles.input} placeholder="Período" editable={false} />
                    <TextInput style={styles.input} placeholder="Data" editable={false} />
                    <TextInput style={styles.input} placeholder="Hora" editable={false} />
                    <TextInput style={styles.input} placeholder="Valor (mg/dl)" keyboardType="numeric" editable={false} />
                    <TextInput style={styles.input} placeholder="Observação" multiline editable={false} />

                    <View style={styles.buttonsGroup}>
                        <Button title="Remover" onPress={() => {}} />
                        <Button title="Cancelar" onPress={() => closeModalDelete()} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}