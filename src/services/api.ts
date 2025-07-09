const API_BASE_URL = "http://localhost:5095"

interface Filme {
    titulo: string;
    genero: string;
    duracao: number;
}

export const FilmeService = {
    async adicionaFilme(filme: Filme): Promise<Filme> {
        const response = await fetch(`${API_BASE_URL}/filme`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filme),
        });

        if (!response.ok) {
            const erroData = await response.json();
            throw new Error(erroData.message || 'Erro ao adicionar Filme');
        }

        return response.json();
    }
}