import { ScrollView } from "react-native";
import { Card } from "@/components/Card"

export default function Info(){
	return(
		<ScrollView contentContainerStyle={{gap: 15, paddingVertical: 20}}>
			<Card title="Como medir sua glicose">
				1. Higiene: Lave bem as mãos com sabão e seque-as totalmente.
				{"\n\n"}
				2. Preparo: Insira a fita no glicosímetro e faça um pequeno furo na lateral da ponta do dedo.
				{"\n\n"}
				3. Coleta: Encoste a gota de sangue na ponta da fita reagente.
				{"\n\n"}
				4. Registro: Aguarde o resultado e anote o valor aqui no DiaControl.
				{"\n\n"}
				Dica: Alterne os dedos a cada medição para evitar calos.
			</Card>

			<Card title="Valores de Referência">
				Ao acordar (Jejum): Entre 80 e 130 mg/dL
				{"\n\n"}
				Antes das refeições: Menor que 130 mg/dL
				{"\n\n"}
				2h após refeições: Menor que 180 mg/dL
				{"\n\n"}
				Ao deitar: Entre 90 e 150 mg/dL
			</Card>

			<Card title="Referências">
				AQUINO, Jéssica Azevedo. Cartilha de Orientações sobre DIABETES: Projeto Empoderamento Farmacoterapêutico de pacientes com Diabetes Mellitus. Universidade Federal de São João del-Rei Campus Centro-Oeste - Divinópolis, Minas Gerais, 2015.
				{"\n\n"}
				Pititto B, Dias M, Moura F, Lamounier R, Calliari S, Bertoluci M. Metas no tratamento do diabetes. Diretriz Oficial da Sociedade Brasileira de Diabetes (2023). DO 10.29327/557753.2022-3, ISBN: 978-85-5722-906-8. Disponível em: https://diretriz.diabetes.org.br/metas-no-tratamento-do-diabetes/#citacao. Acesso em: 20 jun. 2024.
			</Card>
		</ScrollView>

	)
}