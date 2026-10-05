export default function ListaChamados({ chamados }) {
    return (
        <div>
            <h2>Lista de chamados</h2>
            <table>

                <thead>
                    <tr>
                        <th>Nome do Solicitante</th>
                        <th>Setor</th>
                        <th>Tipo de Problema</th>
                        <th>Descrição do Problema</th>
                        <th>Prioridade</th>
                    </tr>
                </thead>

                <tbody>
                    {chamados.map((chamado) => (
                        <tr key={chamado.id}>
                            <td>{chamado.solicitante}</td>
                            <td>{chamado.setor}</td>
                            <td>{chamado.tipo}</td>
                            <td>{chamado.descricao}</td>
                            <td>{chamado.prioridade}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}