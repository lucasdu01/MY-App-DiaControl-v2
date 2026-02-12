import { FlatList, FlatListProps, Text, TouchableOpacity, View, ScrollView  } from "react-native";

import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "../ButtonAdd.tsx";

export interface GlicemiaItem {
	id: string;
	data: string;
	hora: string;
	valor: number;
	observacao?: string;
}

type Props = {
	data: GlicemiaItem[];
	emptyMessage?: string;
	handleCreate?: (item: GlicemiaItem) => void;
	handleEdit?: (item: GlicemiaItem) => void;
  	handleDelete?: (item: GlicemiaItem) => void;
}

export function Table({ data, emptyMessage, handleCreate, handleEdit, handleDelete}: Props){
	return(
		<>
			<View style={styles.table}>
				<TableHeader />
				<ScrollView
					style={{ maxHeight: 300 }}
					nestedScrollEnabled={true}
				>
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
			<Button onCreate={handleCreate}/>
		</>
    )
}

const TableHeader = () => (
	<View style={styles.tableHeader}>
		<Text style={styles.headerCell}>Data</Text>
		<Text style={styles.headerCell}>Hora</Text>
		<Text style={styles.headerCell}>mg/dl</Text>
		<Text style={styles.headerCell}>Obs</Text>
		<Text style={styles.headerCell}>Ações</Text>
	</View>
)

interface TableRowProps {
	item: GlicemiaItem;
	onEdit?: (item: GlicemiaItem) => void;
	onDelete?: (item: GlicemiaItem) => void;
}

const TableRow = ({ item, onEdit, onDelete}: TableRowProps) => (
	<View style={styles.tableRow}>
		
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
			<View style={styles.cellActions}>
				<TouchableOpacity onPress={() => onEdit?.(item)}>
					<MaterialIcons name="edit" size={15} color="#F4B400"/>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => onDelete?.(item)}>
					<MaterialIcons name="delete" size={15} color="#E53935"/>
				</TouchableOpacity>	
			</View>
		</View>
	</View>
)