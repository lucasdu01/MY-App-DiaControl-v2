import { type SQLiteDatabase } from "expo-sqlite";

export async function migrate(database: SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS "registros"(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            periodo TEXT NOT NULL,
            data TEXT NOT NULL,
            hora TEXT NOT NULL,
            valor INTEGER NOT NULL,
            observacao TEXT,
            created_at timestamp NOT NULL DEFAULT current_timestamp,
            updated_at timestamp NOT NULL DEFAULT current_timestamp
        );
    `);
}