import { useState } from "react";
import { FormRegistro } from "@/components/FormRegistros";
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
	const [modalVisible, setModalVisible] = useState(false);
	const [periodoSelecionado, setPeriodoSelecionado] = useState("Ao Acordar");
	const [registros, setRegistros] = useState<GlicemiaItem[]>(
  		dadosFicticios.map((item) => ({ ...item, periodo: "Ao Acordar" }))
	);

	const handleCreate = (periodo: string) => {
		setPeriodoSelecionado(periodo);
		setModalVisible(true);
	}
	const handleEdit = (item: GlicemiaItem) => {
   		console.log("Editar:", item);
    	//implementar a lógica de edição
  	};

  	const handleDelete = (item: GlicemiaItem) => {
    	console.log("Deletar:", item);
    	// implementar a lógica de exclusão
  	};

	const salvarRegistro = (item: GlicemiaItem) => {
		setRegistros((anterior) => {
    		const indice = anterior.findIndex((r) => r.id === item.id);
    		if (indice >= 0) {
				const copia = [...anterior];
				copia[indice] = item;
				return copia;
    		}

			return [item, ...anterior];
		});
	};

	function filtrarRegistrosPorPeriodo(periodo: string) {
		return registros.filter((registro) => registro.periodo === periodo);
	}

	return(
		<>
			<ScrollView contentContainerStyle={{gap: 15, paddingVertical: 20}}>
				<Card title="Ao Acordar" hasTable>
					<Table
						data={filtrarRegistrosPorPeriodo("Ao Acordar")}
						handleCreate={() => handleCreate("Ao Acordar")}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				</Card>

				<Card title="Almoço (antes)" hasTable >
					<Table
						data={filtrarRegistrosPorPeriodo("Almoço (antes)")}
						handleCreate={() => handleCreate("Almoço (antes)")}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				</Card>

				<Card title="Almoço (2h depois)" hasTable >
					<Table
						data={filtrarRegistrosPorPeriodo("Almoço (2h depois)")}
						handleCreate={() => handleCreate("Almoço (2h depois)")}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				</Card>

				<Card title="Janta (antes)" hasTable >
					<Table
						data={filtrarRegistrosPorPeriodo("Janta (antes)")}
						handleCreate={() => handleCreate("Janta (antes)")}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				</Card>

				<Card title="Janta (2h depois)" hasTable >
					<Table
						data={filtrarRegistrosPorPeriodo("Janta (2h depois)")}
						handleCreate={() => handleCreate("Janta (2h depois)")}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				</Card>

				<Card title="Ao Deitar" hasTable >
					<Table
						data={filtrarRegistrosPorPeriodo("Ao Deitar")}
						handleCreate={() => handleCreate("Ao Deitar")}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				</Card>

				<Card title="Outros horários" hasTable >
					<Table
						data={filtrarRegistrosPorPeriodo("Outros horários")}
						handleCreate={() => handleCreate("Outros horários")}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				</Card>
			</ScrollView>

			<FormRegistro
				visible={modalVisible}
				periodoPreenchido={periodoSelecionado}
				onClose={() => setModalVisible(false)}
				onSave={(item) => {
					salvarRegistro(item);
					setModalVisible(false);
				}}
			/>
		</>
		
	)
}