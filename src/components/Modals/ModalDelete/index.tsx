import { View, Text, Button, TouchableOpacity, TextInput, Modal } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

import { SelectPeriodo } from '../../Inputs/SelectPeriodo'
import { InputData } from '../../Inputs/InputData'
import { InputHora } from '../../Inputs/InputHora'
import { InputNumber } from '../../Inputs/InputNumber'
import { ButtonSave } from '../../Buttons/ButtonSave'
import { ButtonCancel } from '../../Buttons/ButtonCancel'
import { ButtonDelete } from '@/components/Buttons/ButtonDelete'

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

                    <View style={styles.inputsGroup}>
                        <Text style={styles.label}>Periodo</Text>
                        <SelectPeriodo editable={false}/>

                        <Text style={styles.label}>Data</Text>
                        <InputData editable={false}/>

                        <Text style={styles.label}>Hora</Text>
                        <InputHora editable={false}/>

                        <Text style={styles.label}>Valor da glicemia medido (mg/dl)</Text>
                        <InputNumber editable={false} />

                        <Text style={styles.label}>Observação</Text>
                        <TextInput style={styles.input} placeholder="Ex: Vitamina de banana e maçã" multiline editable={false}  />
                    </View>

                    <View style={styles.buttonsGroup}>
                        <ButtonDelete />
                        <ButtonCancel onPress={() => closeModalDelete()}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}