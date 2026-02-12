import { type SQLiteDatabase} from "expo-sqlite"

export async function migrate(database: SQLiteDatabase) {
	await database.execAsync(`
		PRAGMA foreign_keys = ON;	-- Ativa as chaves estrangeiras

		CREATE TABLE IF NOT EXISTS registros (			-- Cria tabela se ela ainda nao existe
			id INTEGER	PRIMARY KEY AUTOINCREMENT,		-- id é criado automaticamente
			data TEXT NOT NULLL, 						-- Data no formato DD/MM/YY
			hora TEXT NOT NULL,							-- Hora no formato HH:MM
			value FLOAT NOT NULL,						-- Valor da glicemia em mg
			obs TEXT,									-- Observação opcional
			created_at timestamp NOT NULL DEFAULT current_timestamp,	-- Salva data e hora da criação
			updated_at timestamp NOT NULL DEFAULT current_timestamp, -- Salva data e hora da atualização
		);

		
		`)
}