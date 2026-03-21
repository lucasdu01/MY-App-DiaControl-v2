import { View, Text, TextInput, Button, TouchableOpacity, Modal, Alert } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'

import { SelectPeriodo } from '@/components/Inputs/SelectPeriodo'
import { InputData } from '@/components/Inputs/InputData'
import { InputHora } from '@/components/Inputs/InputHora'
import { InputNumber } from '@/components/Inputs/InputNumber'
import { ButtonSave } from '@/components/Buttons/ButtonSave'
import { ButtonCancel } from '@/components/Buttons/ButtonCancel'

import { useGlicemiaForm } from '@/hooks/hooks'
import { useDiaControlDatabase } from '@/database/useDiaControlDatabase'

type Props = {
    modalAddVisible: boolean;	// estado que controla a visibilidade do modal de registro de glicemia
    closeModalAdd: () => void;		// função que será chamada para fechar o modal de registro de glicemia
}

export function ModalAdd( {modalAddVisible, closeModalAdd} : Props) {
    const [isProcessing, setIsProcessing] = useState(false);	// estado para controlar se o processo de salvamento está em andamento

    const { periodo, setPeriodo,
            data, setData,
            hora, setHora,
            valor, setValor,
            observacao, setObservacao,
            limparFormulario
        } = useGlicemiaForm();	// estados para armazenar os valores d{os campos do formulário de registro de glicemia

    const  diacontrolDatabase = useDiaControlDatabase();	// hook personalizado para acessar as funções do banco de dados relacionadas ao controle de glicemia

    function handleSave() {
        if( periodo === '' || data === '' || hora === '' || valor === '') {
            Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        setIsProcessing(true);	// Define o estado de processamento como verdadeiro para indicar que o processo de salvamento está em andamento
        createRegistro();		// Chama a função para criar o registro de glicemia
        setIsProcessing(false);    // Define o estado de processamento como falso após a tentativa de criação do registro
        closeModalAdd();		// Fecha o modal de registro de glicemia
    }

    async function createRegistro() {
        try {
            await diacontrolDatabase.create({
                periodo,
                data,
                hora,
                valor: Number(valor),
                observacao: observacao || null
            });
            Alert.alert("Novo registro criado com sucesso!", `Período: ${periodo}\nData: ${data}\nHora: ${hora}\nValor: ${valor} mg/dl\nObservação: ${observacao}`);
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao salvar o registro. Por favor, tente novamente.');
            console.log(error);
            setIsProcessing(false);    // Define o estado de processamento como falso em caso de erro para permitir novas tentativas de salvamento
        }
    }

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
                        <SelectPeriodo periodo={periodo} setPeriodo={setPeriodo}/>

                        <Text style={styles.label}>Data</Text>
                        <InputData data={data} setData={setData}/>

                        <Text style={styles.label}>Hora</Text>
                        <InputHora hora={hora} setHora={setHora}/>

                        <Text style={styles.label}>Valor da glicemia medido (mg/dl)</Text>
                        <InputNumber valor={valor} setValor={setValor}/>

                        <Text style={styles.label}>Observação</Text>
                        <TextInput style={styles.input} placeholder="Ex: Vitamina de banana e maçã" multiline value={observacao} onChangeText={setObservacao}/>
                    </View>

                    <View style={styles.buttonsGroup}>
                        <ButtonSave onPress={handleSave}/>
                        <ButtonCancel onPress={() => { closeModalAdd(), limparFormulario();}}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}