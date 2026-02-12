import { Card } from "@/components/Card"
import { Text, View, Button, ScrollView } from "react-native"

import { Table, GlicemiaItem } from "../components/Table";
const dadosFicticios: GlicemiaItem[] = [
  { id: "1", data: "10/02/26", hora: "08:00", valor: 95, observacao: "Em jejum" },
  { id: "2", data: "10/02/26", hora: "12:30", valor: 140 },
  { id: "3", data: "10/02/26", hora: "19:00", valor: 110 },
  { id: "4", data: "11/02/26", hora: "07:45", valor: 88 },
  { id: "5", data: "11/02/26", hora: "13:00", valor: 165, observacao: "Após almoço" },
  { id: "6", data: "11/02/26", hora: "22:30", valor: 102 },
  { id: "7", data: "12/02/26", hora: "08:15", valor: 92 },
  { id: "8", data: "12/02/26", hora: "12:00", valor: 135 },
  { id: "9", data: "12/02/26", hora: "20:00", valor: 118 },
  { id: "10", data: "13/02/26", hora: "07:30", valor: 85, observacao: "Acordei bem" },
  { id: "11", data: "13/02/26", hora: "13:15", valor: 152 },
  { id: "12", data: "13/02/26", hora: "19:30", valor: 125 },
  { id: "13", data: "14/02/26", hora: "08:00", valor: 98 },
  { id: "14", data: "14/02/26", hora: "12:45", valor: 145 },
  { id: "15", data: "14/02/26", hora: "21:00", valor: 115 },
  { id: "16", data: "15/02/26", hora: "07:50", valor: 90 },
  { id: "17", data: "15/02/26", hora: "13:00", valor: 160, observacao: "Pizza" },
  { id: "18", data: "15/02/26", hora: "19:15", valor: 122 },
  { id: "19", data: "16/02/26", hora: "08:10", valor: 94 },
  { id: "20", data: "16/02/26", hora: "12:30", valor: 138 },
  
];

export default function Glicemia(){
	const handleEdit = (item: GlicemiaItem) => {
   		console.log("Editar:", item);
    	//implementar a lógica de edição
  	};

  	const handleDelete = (item: GlicemiaItem) => {
    	console.log("Deletar:", item);
    	// implementar a lógica de exclusão
  	};

	return(
		<ScrollView contentContainerStyle={{gap: 15, paddingVertical: 20}}>
			<Card title="Ao Acordar" hasTable>
				<Table
					data={dadosFicticios}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
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

			<Card title="Ao deitar" hasTable >
				<Text>asdasda</Text>
			</Card>

			<Card title="Outros horários" hasTable >
				asdasda
			</Card>
		</ScrollView>
	)
}