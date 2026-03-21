import { useSQLiteContext } from "expo-sqlite";

export type RegistroCreate = {
    periodo: string;
    data: string;
    hora: string;
    valor: number;
    observacao?: string;
};

export function useDiaControlDatabase() {
    const database = useSQLiteContext();    // Obtém o contexto do banco de dados SQLite usando o hook personalizado useSQLiteContext
    async function create(dados: RegistroCreate) {
        const statement = await database.prepareAsync(
            'INSERT INTO registros (periodo, data, hora, valor, observacao) VALUES ($periodo, $data, $hora, $valor, $observacao)'
        );    // Prepara a declaração SQL para inserir um novo registro na tabela "registros"
    
        statement.executeAsync({
            $periodo: dados.periodo,
            $data: dados.data,
            $hora: dados.hora,
            $valor: dados.valor,
            $observacao: dados.observacao || null
        });    // Executa a declaração SQL, passando os valores dos campos do registro como parâmetros para evitar injeção de SQL e garantir a segurança dos dados
    }

    return {
        create,
    }
}