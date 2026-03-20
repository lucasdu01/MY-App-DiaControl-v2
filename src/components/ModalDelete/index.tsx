import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    handleDelete: (item: any) => void;	// função que será chamada para deletar registro de glicemia, recebendo um objeto com os dados do registro como parâmetro
    closeModal: () => void;		// função que será chamada para fechar o modal de registro de glicemia
}

export function ModalDelete({ closeModal, handleDelete} : Props) {
    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                <View style={styles.headerForm}>
                    <Text style={styles.title}>Remover Registro</Text>
                    <TouchableOpacity onPress={() => closeModal()}>
                        <MaterialIcons name="close" size={32} style={styles.closeButton} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.msgConfirm}>Tem certeza que deseja remover este registro? </Text>

                <TextInput style={styles.input} placeholder="Período" editable={false} />
                <TextInput style={styles.input} placeholder="Data" editable={false} />
                <TextInput style={styles.input} placeholder="Hora" editable={false} />
                <TextInput style={styles.input} placeholder="Valor (mg/dl)" keyboardType="numeric" editable={false} />
                <TextInput style={styles.input} placeholder="Observação" multiline editable={false} />

                <View style={styles.buttonsGroup}>
                    <Button title="Remover" onPress={() => {}} />
                    <Button title="Cancelar" onPress={() => closeModal()} />
                </View>
            </View>
        </View>
    )
}