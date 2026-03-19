import { Text, ScrollView, View, TouchableOpacity, FlatList } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"

import { styles } from "./styles"
import { ReactNode } from "react"


// tipagem das props do componente Card
type Props = {
	title: string		// title é uma string que representa o título do cartão, que será exibido no cabeçalho do cartão
	children: ReactNode	// children é um ReactNode que representa o conteúdo do cartão, que pode ser qualquer elemento React, como texto, imagens ou outros componentes. Esse conteúdo será exibido quando o cartão estiver expandido.
	hasTable?: boolean	// hasTable é um booleano opcional que indica se o cartão contém uma tabela. Se for true, o estilo do conteúdo do cartão será ajustado para acomodar a tabela, removendo as margens padrão.
}

// Componente de cartão expansível para exibir informações ou tabelas
export function Card( {title, children, hasTable=false}: Props ){
	const [isExpanded, setIsExpanded] = useState(false)		// isExpanded é um estado booleano que indica se o cartão está expandido ou não. O estado é inicializado como false, ou seja, o cartão começa fechado. A função setIsExpanded é usada para atualizar esse estado quando o usuário clica no cabeçalho do cartão para expandi-lo ou recolhê-lo.

	return(
		<View style={styles.container}>
			<TouchableOpacity 
				style={styles.headerCard}
				onPress={() => setIsExpanded(!isExpanded)}		// Quando o usuário clica no cabeçalho do cartão, a função onPress é chamada, que alterna o estado isExpanded entre true e false usando a função setIsExpanded. Isso faz com que o cartão seja expandido ou recolhido, dependendo do estado atual.
			>
				<Text style={styles.title}>{title}</Text>
				<MaterialIcons
					name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
					color="#316AC6"
					size={40}
				/>
			</TouchableOpacity>
			{/* Se isExpanded for true, o conteúdo do cartão será renderizado. Caso contrário, nada será exibido. */}
			{isExpanded && (		
				<View style={hasTable ? [styles.content, {margin:0}] : styles.content}>
                    {children}
                </View>
			)}
		</View>
	)
}