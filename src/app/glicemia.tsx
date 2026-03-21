import { Card } from "@/components/Card"
import { Text, ScrollView, Modal, Alert } from "react-native"
import { Table, GlicemiaItem } from "../components/Table";
import { useGlicemiaModals } from "@/hooks/hooks";
import { ModalAdd } from "@/components/Modals/ModalAdd";
import { ModalEdit } from "@/components/Modals/ModalEdit";
import { ModalDelete } from "@/components/Modals/ModalDelete";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";

import { useDiaControlDatabase } from "@/database/useDiaControlDatabase";

// Componente principal da tela de glicemia
export default function Glicemia(){
	const { modalAddVisible, openModalAdd, closeModalAdd } = useGlicemiaModals();
	const { modalEditVisible, openModalEdit, closeModalEdit } = useGlicemiaModals();
	const { modalDeleteVisible, openModalDelete, closeModalDelete } = useGlicemiaModals();
	const [registros, setRegistros] = useState<GlicemiaItem[]>([]);	// Estado para armazenar os registros de glicemia obtidos do banco de dados, inicializado como um array vazio

	const diacontrolDatabase = useDiaControlDatabase();	// Usa o hook personalizado useDiaControlDatabase para acessar as funções de manipulação do banco de dados relacionadas ao controle diário de glicemia

	async function fetchRegistros() {
		try{
			const response = await diacontrolDatabase.listByData();	// Chama a função listByData do hook useDiaControlDatabase para obter os registros de glicemia do banco de dados, ordenados por data e hora
			console.log("Registros de glicemia:", response);	// Exibe os registros de glicemia obtidos do banco de dados no console para verificação
			setRegistros(response);	// Atualiza o estado do componente com os registros obtidos
		} catch (error) {
			Alert.alert("Erro", "Ocorreu um erro ao buscar os registros de glicemia. Por favor, tente novamente.");	// Exibe um alerta para o usuário caso haja algum erro ao buscar os registros de glicemia do banco de dados
			console.log(error);
		}
	}
	useFocusEffect(
  		useCallback(() => {
    		fetchRegistros();
  	}, [])
);
	return(
		<>
			<ScrollView contentContainerStyle={{gap: 15, paddingVertical: 20}}>
				<Card title="Ao Acordar" hasTable>
					<Table
						data={registros}				// data é um array de objetos do tipo GlicemiaItem passado como prop para o componente Table, que contém os registros de glicemia a serem exibidos na tabela
						openModalAdd={openModalAdd}
						openModalEdit={openModalEdit}
						openModalDelete={openModalDelete}
						emptyMessage="Nenhum registro encontrado"	// emptyMessage é uma string opcional passada como prop para o componente Table, que será exibida quando não houver registros de glicemia para mostrar na tabela
					/>
				</Card>

				<Card title="Almoço (antes)" hasTable >
					<Text>asdasda</Text>
				</Card>

				<Card title="Almoço (2h depois)" hasTable >
					<Text>asdasda</Text>
				</Card>

				<Card title="Janta (antes)" hasTable >
					<Text>asdasda</Text>
				</Card>

				<Card title="Janta (2h depois)" hasTable >
					<Text>asdasda</Text>
				</Card>

				<Card title="Ao Deitar" hasTable >
					<Text>asdasda</Text>
				</Card>

				<Card title="Outros horários" hasTable >
					<Text>asdasda</Text>
				</Card>
			</ScrollView>

			{/* Renderiza os modais */}
			<ModalAdd modalAddVisible={modalAddVisible} closeModalAdd={closeModalAdd} onSaved={fetchRegistros}/>
			<ModalEdit modalEditVisible={modalEditVisible} closeModalEdit={closeModalEdit}/> 
			<ModalDelete modalDeleteVisible={modalDeleteVisible} closeModalDelete={closeModalDelete}/>
		</>		
	)
}