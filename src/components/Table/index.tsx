import { FlatList, FlatListProps, Text, TouchableOpacity, View, ScrollView, Modal  } from "react-native";

import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonAdd  } from "../ButtonAdd.tsx";
import { useGlicemiaModals } from "@/features/glicemia/hooks/hooks";

// tipagem do item de glicemia
export interface GlicemiaItem {
	id: string;
	data: string;
	hora: string;
	valor: number;
	observacao?: string;
}

// tipagem das props do componente Table
type Props = {
	data: GlicemiaItem[];
	emptyMessage?: string;
	openModalAdd: () => void;
	openModalEdit: () => void;
	openModalDelete: () => void;

}


// Componente de tabela para exibir os registros de glicemia
export function Table({ data, emptyMessage, openModalAdd, openModalEdit, openModalDelete }: Props){
	return(
		<>
			<View style={styles.table}>
				<TableHeader />
				<ScrollView
					style={{ maxHeight: 300 }}
					nestedScrollEnabled
					showsVerticalScrollIndicator
					persistentScrollbar
				>
					{/* Conteúdo da tabela */}
					{data.map((item) => (
						<TableRow
							key={item.id}
							item={item}
							openModalDelete={openModalDelete}
							openModalEdit={openModalEdit}
						/>
					))}
				</ScrollView>
			</View>
			<ButtonAdd 	onPress={openModalAdd}/>
		</>
    )
}

// Componente para renderizar o cabeçalho da tabela
const TableHeader = () => (
	<View style={styles.tableHeader}>
		<Text style={styles.headerCell}>Data</Text>
		<Text style={styles.headerCell}>Hora</Text>
		<Text style={styles.headerCell}>mg/dl</Text>
		<Text style={styles.headerCell}>Obs</Text>
		<Text style={styles.headerCell}>Ações</Text>
	</View>
)

// tipagem das props do componente TableRow
interface TableRowProps {
	item: GlicemiaItem;
	openModalEdit: () => void;				// openModalEdit é uma função que retorna void. Essa função será chamada para abrir o modal de edição quando o usuário clicar no botão para editar um registro de glicemia.
	openModalDelete: () => void;				// openModalDelete é uma função que retorna void. Essa função será chamada para abrir o modal de confirmação de exclusão quando o usuário clicar no botão para excluir um registro de glicemia.
}

// Componente para renderizar cada linha da tabela, representando um registro de glicemia
const TableRow = ({ item, openModalEdit, openModalDelete}: TableRowProps) => (
	<View style={styles.tableRow}>
		{ /* Cada célula da linha exibe um campo do item de glicemia, como data, hora, valor e observação. O estilo das células é definido pelo arquivo styles.ts. */ }
		<View style={styles.cell}>
			<Text style={styles.cellText}>{item.data}</Text>
		</View>

		<View style={styles.cell}>
			<Text style={styles.cellText}>{item.hora}</Text>
		</View>

		<View style={styles.cell}>
			<Text style={styles.cellText}>{item.valor}</Text>
		</View>

		<View style={styles.cell}>
			<Text style={styles.cellText}>{item.observacao}</Text>
		</View>

		<View style={styles.cell}>
			{ /* Botões de ação para editar e excluir o registro de glicemia. As funções onEdit e onDelete são chamadas quando os botões são pressionados, passando o item correspondente como argumento. */ }
			<View style={styles.cellActions}>
				<TouchableOpacity onPress={() => openModalEdit()}>
					<MaterialIcons name="edit" size={20} color="#F4B400"/>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => openModalDelete()}>
					<MaterialIcons name="delete" size={20} color="#E53935"/>
				</TouchableOpacity>	
			</View>
		</View>
	</View>
)