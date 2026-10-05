export default function FormChamado({
    solicitante,
    setSolicitante,
    setor,
    setSetor,
    tipo,
    setTipo,
    descricao,
    setDescricao,
    prioridade,
    setPrioridade,
    sending,
    handleSubmit,
    erros
}) {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Abertura de chamado</h2>

            <label htmlFor="solicitante">Nome do Solicitante</label>
            <input
                type="text"
                name="solicitante"
                id="solicitante"
                value={solicitante}
                onChange={(e) => setSolicitante(e.target.value)}
            />
            <div>
                {erros.solicitante}
            </div>

            <label htmlFor="setor">Setor</label>
            <select
                name="setor"
                id="setor"
                value={setor}
                onChange={(e) => setSetor(e.target.value)}
            >
                <option value="">Selecione uma opção</option>
                <option value="ti">TI</option>
                <option value="rh">RH</option>
                <option value="financeiro">Financeiro</option>
                <option value="operacoes">Operações</option>
                <option value="comercial">Comercial</option>
            </select>
            <div>
                {erros.setor}
            </div>

            <label htmlFor="tipo">Tipo de Problema</label>
            <select
                name="tipo"
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
            >
                <option value="">Selecione uma opção</option>
                <option value="hardware">Hardware</option>
                <option value="software">Software</option>
                <option value="rede">Rede</option>
                <option value="acesso">Acesso</option>
            </select>
            <div>
                {erros.tipo}
            </div>

            <label htmlFor="descricao">Descrição do Problema</label>
            <textarea
                name="descricao"
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            >

            </textarea>
            <div>
                {erros.descricao}
            </div>

            <label htmlFor="prioridade">Prioridade</label>
            <select
                name="prioridade"
                id="prioridade"
                value={prioridade}
                onChange={(e) => setPrioridade(e.target.value)}
            >
                <option value="">Selecione uma opção</option>
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
            </select>
            <div>
                {erros.prioridade}
            </div>

            <button
                type="submit"
                disabled={sending}
            >
                {sending ? "Enviando..." : "Enviar"}
            </button>
        </form>
    );
}