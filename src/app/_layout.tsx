import { Tabs } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { Text } from "react-native"

export default function Layout(){
	return (
		<Tabs
			screenOptions={{
        		headerTintColor: "#316AC6",
        		headerTitleStyle: {
          			fontWeight: "900",
					fontSize: 30,
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
					tabBarIcon: ({ color }) => <MaterialIcons name="medical-information" size={30} color={ color } />
				}}
			/>
		</Tabs>
	)
}

