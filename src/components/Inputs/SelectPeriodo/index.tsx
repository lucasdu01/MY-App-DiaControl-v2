import { View, TextInput, Text, Touchable, TouchableOpacity } from 'react-native'
import { useCallback, useState } from 'react'
import { styles } from './styles'
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

export function SelectPeriodo() {
    const [expanded, setExpanded] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    
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
            <TouchableOpacity style={styles.button} onPress={toggleExpanded}>
                <Text style={styles.buttonText}>
                    {selectedValue || 'Selecione o período'}
                </Text>
                <MaterialIcons name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="black" /> 
            </TouchableOpacity>
            {expanded ? (
                <View style={styles.options}>
                    <FlatList
                        data={periodos}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.optionItem} onPress={() => { setSelectedValue(item); toggleExpanded(); }}>
                                <Text style={styles.textOptionItem}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            ) : null}    
        </View>
    )
}