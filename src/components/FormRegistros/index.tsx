import { Modal, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useState, useEffect } from "react";

import { styles } from "./styles";
import { PERIODOS_GLICEMIA } from "@/constants";
import { GlicemiaItem } from "../Table";

type Props = {
    visible: boolean;
    periodoPreenchido: string;
    itemParaEditar?: GlicemiaItem;
    onSave: (item:GlicemiaItem) => void | Promise<void>;
    onClose: () => void;
}

export function FormRegistro({ visible, periodoPreenchido, itemParaEditar, onSave, onClose }: Props){
    const [formData, setFormData] = useState({
        id: "",
        data: "",
        hora: "",
        valor: "",
        observacao: "",
        periodo: periodoPreenchido
    });

    const [mostrarPeriodos, setMostrarPeriodos] = useState(false);

    useEffect(() => {
        if (itemParaEditar) {
            setFormData({
                id: itemParaEditar.id,
                data: itemParaEditar.data,
                hora: itemParaEditar.hora,
                valor: String(itemParaEditar.valor),
                observacao: itemParaEditar.observacao || "",
                periodo: itemParaEditar.periodo || periodoPreenchido
            });
        } else {
            setFormData({
                id: "",
                data: "",
                hora: "",
                valor: "",
                observacao: "",
                periodo: periodoPreenchido
            });
        }
    }, [visible, itemParaEditar, periodoPreenchido]);

    const handleSave = async () => {
        if(!formData.data || !formData.hora || !formData.valor  || !formData.periodo){
            Alert.alert("Atenção", "Preencha todos os campos obrigatórios.");
            return;
        }

        const registro: GlicemiaItem = {
            id: formData.id || String(Date.now()),
            data: formData.data,
            hora: formData.hora,
            valor: Number(formData.valor),
            observacao: formData.observacao || undefined,
            periodo: formData.periodo,
        };

        onSave(registro);
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>{itemParaEditar ? "Editar Registro" : "Novo Registro"}</Text>
                    <ScrollView>

                         {/* Input PERIODO */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}> Período *</Text>

                            <TouchableOpacity style={styles.picker} onPress={() => setMostrarPeriodos((prev) => !prev)}>
                                <Text style={styles.pickerText}>{formData.periodo}</Text>
                            </TouchableOpacity>

                            {mostrarPeriodos && (
                                <View>
                                    {PERIODOS_GLICEMIA.map((periodo) => (
                                        <TouchableOpacity
                                            key={periodo}
                                            onPress={() => {
                                                setFormData({ ...formData, periodo });
                                                setMostrarPeriodos(false);
                                            }}
                                        >
                                            <Text>{periodo}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </View>

                        {/* Input DATA */}  
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Data *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="DD/MM/AA"
                                value={formData.data}
                                onChangeText={(text) => setFormData({ ...formData, data: text })}
                            />
                        </View>

                        {/* Input HORA */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Hora *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="HH:MM"
                                value={formData.hora}
                                onChangeText={(text) => setFormData({ ...formData, hora: text })}
                            />
                        </View>

                        {/* Input VALOR */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Valor *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Valor da glicemia medido"
                                value={formData.valor}
                                onChangeText={(text) => setFormData({ ...formData, valor: text })}
                                keyboardType="numeric"
                            />
                        </View>

                        {/* Input OBSERVAÇÃO */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Observação</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Observações sobre o registro"
                                value={formData.observacao}
                                onChangeText={(text) => setFormData({ ...formData, observacao: text })}
                            />
                        </View>

                    </ScrollView>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Modal>
    )
}