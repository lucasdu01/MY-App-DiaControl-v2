import { View, TextInput, Text } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

import { useGlicemiaForm } from '@/hooks/hooks'

type Props = {
    editable?: boolean; // Propriedade opcional para desabilitar o campo
    data: string; // Valor da data para exibir no campo, passado como prop do componente pai
    setData: (data: string) => void; // Função para atualizar o estado da data no componente pai
}

export function InputData( {editable = true, data, setData}: Props) {

    const formatDate = (text: string) => {
        // Remove tudo que não é número
        const numbers = text.replace(/\D/g, '')
        
        if (numbers.length === 0) {
            setData('')
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

        setData(formatted)
    }

    return (
        <TextInput 
            style={styles.input}   
            placeholder="DD/MM/AA"      // Placeholder para o formato de data
            onChangeText={formatDate}       // Formata a data enquanto o usuário digita
            keyboardType="number-pad" // Abre o teclado numérico
            maxLength={8}       // Limita a entrada a 8 caracteres (DDMMYY)
            editable={editable} // Define se o campo é editável ou não, com valor padrão como true (editável)
            value={data} // Valor da data para exibir no campo
        />
    )
}