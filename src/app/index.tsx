import { Text, ScrollView } from "react-native";

import { Card } from "@/components/Card"

export default function Index(){
	return(
		<ScrollView contentContainerStyle={{gap: 15, paddingVertical: 20}}>
			<Card title="O que é Diabetes ?">		
				<Text>O diabetes é um conjunto de doenças que afetam a forma como o corpo usa o açúcar no sangue (glicose), que é a principal fonte de energia para as células.	
				{"\n\n"}
				Essas doenças podem causar complicações em vários órgãos, como olhos, rins, nervos, cérebro, coração e vasos sanguíneos.
					</Text>
			</Card>

			<Card title="Entenda o Tipo 1">				
				O diabetes tipo 1 geralmente começa na infância ou adolescência, mas também pode ser diagnosticado em adultos. 
				{"\n\n"}
				Pessoas com parentes próximos que têm ou tiveram a doença devem fazer exames regulares para verificar o nível de açúcar no sangue.
				{"\n\n"}
				Esse tipo de diabetes ocorre quando o corpo não produz insulina suficiente.
				{"\n\n"}
				A insulina é um hormônio essencial para ajudar o açúcar do sangue a entrar nas células para ser usado como energia.
				{"\n\n"}
				No diabetes tipo 1, o tratamento com insulina é necessário para evitar complicações graves, como cetoacidose, que pode levar ao coma ou até a morte.
			</Card>

			<Card title="Entenda o Tipo 2">				
				O diabetes tipo 2 acontece quando o corpo não utiliza bem a insulina que produz.
				{"\n\n"}
				Esse tipo de diabetes está frequentemente ligado ao excesso de peso, falta de atividade física, níveis elevados de gorduras no sangue (triglicerídeos), pressão alta e uma alimentação pouco saudável.
				{"\n\n"}
				Nesse caso, o corpo ainda produz insulina, mas não o suficiente para manter os níveis de açúcar no sangue sob controle.
				{"\n\n"}
				A administração de insulina, quando necessária, ajuda a controlar os níveis de açúcar, mas não tem o mesmo risco de cetoacidose como no tipo 1.
			</Card>
		</ScrollView>
	)
}