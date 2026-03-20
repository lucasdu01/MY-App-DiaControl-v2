import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    handleCreate: (item: any) => void;	// função que será chamada para criar um novo registro de glicemia, recebendo um objeto com os dados do registro como parâmetro
    closeModal: () => void;		// função que será chamada para fechar o modal de registro de glicemia
}


export function FormRegistro( {closeModal, handleCreate} : Props) {

    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                <View style={styles.headerForm}>
                    <Text style={styles.title}>Registrar Glicemia</Text>
                    <TouchableOpacity onPress={() => closeModal()}>
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
                    <Button title="Cancelar" onPress={() => closeModal()} />
                </View>
            </View>
        </View>
    )
}