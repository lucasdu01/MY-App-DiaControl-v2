import { useSQLiteContext } from "expo-sqlite";

export type RegistroCreate = {
    periodo: string;
    data: string;
    hora: string;
    valor: number;
    observacao?: string;
};

export type DiaControlResponse = {
    id: number;
    periodo: string;
    data: string;
    hora: string;
    valor: number;
    observacao?: string;
}

export function useDiaControlDatabase() {
    const database = useSQLiteContext();    // Obtém o contexto do banco de dados SQLite usando o hook personalizado useSQLiteContext

    // Função para criar um novo registro de glicemia no banco de dados
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

    // Funcao para listar os registros de glicemia por data
    function listByData() {
        return database.getAllAsync<DiaControlResponse>(`
            SELECT * FROM registros
            ORDER BY data DESC, hora DESC
        `);    // Executa uma consulta SQL para selecionar todos os registros da tabela "registros", ordenando-os por data e hora em ordem decrescente, e retorna os resultados como um array de objetos do tipo DiaControlResponse
    }

    return {
        create,
        listByData
    }
}