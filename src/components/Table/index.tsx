import { FlatList, FlatListProps, Text, TouchableOpacity, View, ScrollView  } from "react-native";

import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonAdd  } from "../ButtonAdd.tsx";

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
	openModal: () => void;
	handleCreate?: (item: GlicemiaItem) => void;
	handleEdit?: (item: GlicemiaItem) => void;
  	handleDelete?: (item: GlicemiaItem) => void;
}

// Componente de tabela para exibir os registros de glicemia
export function Table({ data, emptyMessage, openModal, handleCreate, handleEdit, handleDelete}: Props){
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
							onEdit={handleEdit}
							onDelete={handleDelete}
						/>
					))}
				</ScrollView>
			</View>
			<ButtonAdd openModal={openModal}/>
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
	onEdit: (item: GlicemiaItem) => void;		// onEdit é uma função que recebe um item do tipo GlicemiaItem e retorna void. Essa função será chamada quando o usuário clicar no botão para editar um registro de glicemia.
	onDelete: (item: GlicemiaItem) => void;		// onDelete é uma função que recebe um item do tipo GlicemiaItem e retorna void. Essa função será chamada quando o usuário clicar no botão para excluir um registro de glicemia.
}

// Componente para renderizar cada linha da tabela, representando um registro de glicemia
const TableRow = ({ item, onEdit, onDelete}: TableRowProps) => (
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
				<TouchableOpacity onPress={() => onEdit?.(item)}>
					<MaterialIcons name="edit" size={20} color="#F4B400"/>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => onDelete?.(item)}>
					<MaterialIcons name="delete" size={20} color="#E53935"/>
				</TouchableOpacity>	
			</View>
		</View>
	</View>
)