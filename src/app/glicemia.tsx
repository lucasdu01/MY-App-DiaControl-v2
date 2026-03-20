import { Card } from "@/components/Card"
import { Text, ScrollView, Modal } from "react-native"
import { Table, GlicemiaItem } from "../components/Table";
import { useGlicemiaModals } from "@/hooks/hooks";
import { ModalAdd } from "@/components/Modals/ModalAdd";
import { ModalEdit } from "@/components/Modals/ModalEdit";
import { ModalDelete } from "@/components/Modals/ModalDelete";

const dadosFicticios: GlicemiaItem[] = [
  { id: "1", data: "10/02/26", hora: "08:00", valor: 95, observacao: "Em jejum" },
  { id: "2", data: "10/02/26", hora: "12:30", valor: 140 },
  { id: "3", data: "10/02/26", hora: "19:00", valor: 110 },
  { id: "4", data: "11/02/26", hora: "07:45", valor: 88 },
  { id: "5", data: "11/02/26", hora: "13:00", valor: 165, observacao: "Após almoço" },
];

// Componente principal da tela de glicemia
export default function Glicemia(){
	const { modalAddVisible, openModalAdd, closeModalAdd } = useGlicemiaModals();
	const { modalEditVisible, openModalEdit, closeModalEdit } = useGlicemiaModals();
	const { modalDeleteVisible, openModalDelete, closeModalDelete } = useGlicemiaModals();

	return(
		<>
			<ScrollView contentContainerStyle={{gap: 15, paddingVertical: 20}}>
				<Card title="Ao Acordar" hasTable>
					<Table
						data={dadosFicticios}				// data é um array de objetos do tipo GlicemiaItem passado como prop para o componente Table, que contém os registros de glicemia a serem exibidos na tabela
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
			<ModalAdd modalAddVisible={modalAddVisible} closeModalAdd={closeModalAdd}/>
			<ModalEdit modalEditVisible={modalEditVisible} closeModalEdit={closeModalEdit}/> 
			<ModalDelete modalDeleteVisible={modalDeleteVisible} closeModalDelete={closeModalDelete}/>
		</>		
	)
}