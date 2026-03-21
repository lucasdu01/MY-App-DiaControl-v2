import { View, TextInput, Text } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

type Props = {
    editable?: boolean; // Propriedade opcional para desabilitar o campo
    valor: string; // Valor do número para exibir no campo, passado como prop do componente pai
    setValor: (valor: string) => void; // Função para atualizar o estado do valor no componente pai
}

export function InputNumber( { editable = true, valor, setValor }: Props) {

    const formatValue = (text: string) => {
        // Remove tudo que não é número
        const numbers = text.replace(/\D/g, '')
        
        if (numbers.length === 0) {
            setValor('')
            return
        }

        setValor(numbers)
    }

    return (
        <TextInput 
            style={styles.input} 
            placeholder="Ex: 120" 
            onChangeText={formatValue}
            keyboardType="number-pad"
            maxLength={8}
            editable={editable}
            value={valor} 
        />
    )
}