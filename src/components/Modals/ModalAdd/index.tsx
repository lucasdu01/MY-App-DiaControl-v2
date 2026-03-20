import { View, Text, TextInput, Button, TouchableOpacity, Modal } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

import { SelectPeriodo } from '@/components/Inputs/SelectPeriodo'
import { InputData } from '@/components/Inputs/InputData'
import { InputHora } from '@/components/Inputs/InputHora'
import { InputNumber } from '@/components/Inputs/InputNumber'
import { ButtonSave } from '@/components/Buttons/ButtonSave'
import { ButtonCancel } from '@/components/Buttons/ButtonCancel'


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
                            <MaterialIcons name="close" size={32} style={styles.buttonClose} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputsGroup}>
                        <Text style={styles.label}>Periodo</Text>
                        <SelectPeriodo/>

                        <Text style={styles.label}>Data</Text>
                        <InputData/>

                        <Text style={styles.label}>Hora</Text>
                        <InputHora/>

                        <Text style={styles.label}>Valor da glicemia medido (mg/dl)</Text>
                        <InputNumber />

                        <Text style={styles.label}>Observação</Text>
                        <TextInput style={styles.input} placeholder="Ex: Vitamina de banana e maçã" multiline />
                    </View>

                    <View style={styles.buttonsGroup}>
                        <ButtonSave />
                        <ButtonCancel onPress={() => closeModalAdd()}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}