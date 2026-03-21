import { View, TextInput, Text } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

type Props = {
    editable?: boolean; // Propriedade opcional para desabilitar o campo
    hora: string; // Valor da hora para exibir no campo, passado como prop do componente pai
    setHora: (hora: string) => void; // Função para atualizar o estado da hora no componente pai
}

export function InputHora( { editable = true, hora, setHora }: Props) {

    const formatTime = (text: string) => {
        // Remove tudo que não é número
        let numbers = text.replace(/\D/g, '')
        
        if (numbers.length === 0) {
            setHora('')
            return
        }

        // Limita hora a 23
        if (numbers.length >= 2) {
            const hours = parseInt(numbers.slice(0, 2))
            if (hours > 23) {
                numbers = '23' + numbers.slice(2)
            }
        }

        // Limita minuto a 59
        if (numbers.length >= 4) {
            const minutes = parseInt(numbers.slice(2, 4))
            if (minutes > 59) {
                numbers = numbers.slice(0, 2) + '59'
            }
        }

        // Formata como HH:MM
        let formatted = ''
        
        if (numbers.length <= 2) {
            formatted = numbers
        } else if (numbers.length <= 4) {
            formatted = `${numbers.slice(0, 2)}:${numbers.slice(2)}`
        } 

        setHora(formatted)
    }

    return (
        <View>
            <TextInput 
                style={styles.input} 
                placeholder="HH:MM" 
                onChangeText={formatTime}
                keyboardType="number-pad"
                maxLength={5}
                editable={editable}
                value={hora}
            />
        </View>
    )
}