import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { useCallback, useState } from 'react'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

type Props = {
    editable?: boolean; // Propriedade opcional para desabilitar o campo
    periodo: string; // Valor do período selecionado, passado como prop para exibir o valor selecionado no campo
    setPeriodo: (periodo: string) => void; // Função para atualizar o estado do período selecionado no componente pai
}

export function SelectPeriodo({ editable = true, periodo, setPeriodo }: Props) {
    const [expanded, setExpanded] = useState(false);
    
    const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);
    
    const periodos = [
        'Ao Acordar',
        'Almoço (antes)',
        'Almoço (2h depois)',
        'Jantar (antes)',
        'Jantar (2h depois)',
        'Ao Deitar',
        'Outros horários'];

    return (
        <View>
            {!editable ? (
                <TextInput
                    style={styles.input}
                    placeholder={String(periodo) || 'Selecione o período'}
                    value={periodo}
                    editable={false}
                />
            ) : (
                <>
                    <TouchableOpacity style={styles.button} onPress={toggleExpanded}>
                        <Text style={styles.buttonText}>
                            {periodo || 'Selecione o período'}
                        </Text>
                        <MaterialIcons name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="black" /> 
                    </TouchableOpacity>
                    {expanded ? (
                        <View style={styles.options}>
                            <FlatList
                                data={periodos}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.optionItem} onPress={() => { setPeriodo(item); toggleExpanded(); }}>
                                        <Text style={styles.textOptionItem}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    ) : null}
                </>
            )}
        </View>
    )
}