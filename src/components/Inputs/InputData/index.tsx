import { View, TextInput, Text } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

type Props = {
    editable?: boolean; // Propriedade opcional para desabilitar o campo
}

export function InputData( {editable = true}: Props) {
    const [date, setDate] = useState('')

    const formatDate = (text: string) => {
        // Remove tudo que não é número
        const numbers = text.replace(/\D/g, '')
        
        if (numbers.length === 0) {
            setDate('')
            return
        }

        // Formata como DD/MM/AA
        let formatted = ''
        
        if (numbers.length <= 2) {
            formatted = numbers
        } else if (numbers.length <= 4) {
            formatted = `${numbers.slice(0, 2)}/${numbers.slice(2)}`
        } else {
            formatted = `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 6)}`
        }

        setDate(formatted)
    }

    return (
        <TextInput 
            style={styles.input}   
            placeholder="DD/MM/AA"      // Placeholder para o formato de data
            value={date}        // Define o valor do campo como o estado 'date'
            onChangeText={formatDate}       // Formata a data enquanto o usuário digita
            keyboardType="number-pad" // Abre o teclado numérico
            maxLength={8}       // Limita a entrada a 8 caracteres (DDMMYY)
            editable={editable} // Define se o campo é editável ou não, com valor padrão como true (editável)
        />
    )
}