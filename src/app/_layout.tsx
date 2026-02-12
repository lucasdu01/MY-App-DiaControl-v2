import { Suspense } from "react"
import { Tabs } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { migrate } from "@/database/migrate"
import { SQLiteProvider } from "expo-sqlite"

export default function Layout(){
	return (
		<Suspense>
			<SQLiteProvider
				databaseName="diacontrol.db"
				onInit={migrate}
				useSuspense
			>
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
					<Tabs.Screen
						name="info"
						options={{
							headerTitle: "Informações",
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

