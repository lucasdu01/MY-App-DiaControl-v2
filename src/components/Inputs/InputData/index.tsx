import { View, TextInput, Text } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

export function InputData() {
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
            placeholder="DD/MM/AA" 
            value={date}
            onChangeText={formatDate}
            keyboardType="number-pad"
            maxLength={8}
        />
    )
}