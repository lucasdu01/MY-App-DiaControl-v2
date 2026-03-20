import { View, TextInput, Text } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

type Props = {
    editable?: boolean; // Propriedade opcional para desabilitar o campo
}

export function InputNumber( { editable = true}: Props) {
    const [value, setValue] = useState('')

    const formatValue = (text: string) => {
        // Remove tudo que não é número
        const numbers = text.replace(/\D/g, '')
        
        if (numbers.length === 0) {
            setValue('')
            return
        }

        setValue(numbers)
    }

    return (
        <TextInput 
            style={styles.input} 
            placeholder="Ex: 120" 
            value={value}
            onChangeText={formatValue}
            keyboardType="number-pad"
            maxLength={8}
            editable={editable}
        />
    )
}