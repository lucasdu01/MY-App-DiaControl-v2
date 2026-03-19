import { useState, useEffect } from "react";
import { FormRegistro } from "@/components/FormRegistros";
import { Card } from "@/components/Card"
import { Text, View, Button, ScrollView } from "react-native"
import { useSQLiteContext} from "expo-sqlite";

import { Table, GlicemiaItem } from "../components/Table";

export default function Glicemia(){
	const [modalVisible, setModalVisible] = useState(false);
	const [periodoSelecionado, setPeriodoSelecionado] = useState("Ao Acordar");
	const [registros, setRegistros] = useState<GlicemiaItem[]>([]);

	const db = useSQLiteContext();

	async function carregarRegistros(){
		try {
			const rows = await db.getAllAsync<{
				id: number;
				data: string;
				hora: string;
				valor: number;
				observacao: string | null;
				periodo: string;
			}>(
				'SELECT id, data, hora, "value" AS valor, "obs" AS observacao, "periodo" FROM registros ORDER BY created_at DESC'
			);
			const itens: GlicemiaItem[] = rows.map((row) => ({
				id: String(row.id),
				data: row.data,
				hora: row.hora,
				valor: row.valor,
				observacao: row.observacao ?? undefined,
				periodo: row.periodo,
			}));

			setRegistros(itens);
		} catch (error) {
			console.error("Erro ao carregar registros:", error);
		}
	}

	async function salvarRegistroNoBanco(item: GlicemiaItem) {
		await db.runAsync(
			'INSERT INTO registros (data, hora, "value", "obs", periodo) VALUES (?, ?, ?, ?, ?)',
			[item.data, item.hora, item.valor, item.observacao ?? null, item.periodo ?? periodoSelecionado]
		);
	}

	useEffect(() => {
		carregarRegistros();
	}, [db]);


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
				onSave={async (item) => {
					await salvarRegistroNoBanco(item);
					await carregarRegistros();
					setModalVisible(false);
				}}
			/>
		</>
		
	)
}