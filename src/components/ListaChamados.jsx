export default function ListaChamados({
    chamados,
    loading
}) {
    function classePrioridade(prioridade) {
        switch (prioridade.toLowerCase()) {
            case "baixa":
                return "bg-success";
            case "media":
                return "bg-warning text-dark";
            case "alta":
                return "bg-danger";
            default:
                return "bg-secondary";
        }
    }

    return (
        <div>

            <h2 className="mb-4">Lista de chamados</h2>

            <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">

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
                        {loading
                        ?
                            <tr>
                                <td colSpan="5" className="text-center py-4">
                                    Carregando chamados...
                                </td>
                            </tr>
                        :
                            chamados.map((chamado) => (
                                <tr key={chamado.id}>
                                    <td>{chamado.solicitante}</td>
                                    <td>{chamado.setor}</td>
                                    <td>{chamado.tipo}</td>
                                    <td>{chamado.descricao}</td>
                                    <td>
                                        <span className={`badge ${classePrioridade(chamado.prioridade)}`}>
                                            {chamado.prioridade}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
}