import { Tabs } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { SQLiteProvider } from "expo-sqlite"
import { migrate } from "@/database/migrate"
import { Suspense } from "react"

// Componente de layout principal que define a estrutura de navegação do aplicativo
export default function Layout(){
	return (
		<Suspense>
			<SQLiteProvider
				databaseName="diacontrol.db"		// Nome do banco de dados SQLite>
				onInit={migrate}					// Função de migração para configurar o banco de dados
				useSuspense
				>
				{/*// Configuração das abas de navegação*/}
				<Tabs
					screenOptions={{
						headerTintColor: "#316AC6",
						headerTitleStyle: {
							fontWeight: "900",
							fontSize: 30,
						},
						sceneStyle:{
							backgroundColor: "#F5F5F5",
						},
						tabBarShowLabel: false,
						tabBarStyle: {
							backgroundColor: "#dddddd",
							paddingTop: 10,
							paddingBottom: 10
						}
						
					}}
				>
					{/* Configuração das telas de navegação */}
					<Tabs.Screen
						name="info"							// Nome da tela para navegação
						options={{
							headerTitle: "Informações",		// Título exibido no cabeçalho da tela
							tabBarIcon: ({ color }) => <MaterialIcons name="info" size={30} color={ color } />
							
						}}
					/>

					<Tabs.Screen
						name="index"
						options={{
							headerTitle: "Início",
							tabBarIcon: ({ color }) => <MaterialIcons name="home" size={30} color={ color } />
						}}
					/>
					
					<Tabs.Screen
						name="glicemia"
						options={{
							headerTitle: "Glicemia Capilar",
							tabBarIcon: ({ color }) => <MaterialIcons name="water-drop" size={30} color={ color } />
						}}
					/>
				</Tabs>
			</SQLiteProvider>
		</Suspense>
	)
}

