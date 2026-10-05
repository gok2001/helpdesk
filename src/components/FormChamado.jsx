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
        <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
                <div className="card shadow-sm">
                    <div className="card-body p-4">

                        <h2 className="mb-4">Abertura de chamado</h2>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label
                                    htmlFor="solicitante"
                                    className="form-label"
                                >
                                    Nome do Solicitante
                                </label>

                                <input
                                    type="text"
                                    name="solicitante"
                                    id="solicitante"
                                    className={`form-control ${erros.solicitante ? "is-invalid" : ""}`}
                                    value={solicitante}
                                    onChange={(e) => setSolicitante(e.target.value)}
                                />

                                <div className="invalid-feedback">
                                    {erros.solicitante}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="setor"
                                    className="form-label"
                                >
                                    Setor
                                </label>

                                <select
                                    name="setor"
                                    id="setor"
                                    className={`form-select ${erros.setor ? "is-invalid" : ""}`}
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

                                <div className="invalid-feedback">
                                    {erros.setor}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="tipo"
                                    className="form-label"
                                >
                                    Tipo de Problema
                                </label>

                                <select
                                    name="tipo"
                                    id="tipo"
                                    className={`form-select ${erros.tipo ? "is-invalid" : ""}`}
                                    value={tipo}
                                    onChange={(e) => setTipo(e.target.value)}
                                >
                                    <option value="">Selecione uma opção</option>
                                    <option value="hardware">Hardware</option>
                                    <option value="software">Software</option>
                                    <option value="rede">Rede</option>
                                    <option value="acesso">Acesso</option>
                                </select>

                                <div className="invalid-feedback">
                                    {erros.tipo}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="descricao"
                                    className="form-label"
                                >
                                    Descrição do Problema
                                </label>

                                <textarea
                                    name="descricao"
                                    id="descricao"
                                    className={`form-control ${erros.descricao ? "is-invalid" : ""}`}
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                >

                                </textarea>

                                <div className="invalid-feedback">
                                    {erros.descricao}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="prioridade"
                                    className="form-label"
                                >
                                    Prioridade
                                </label>

                                <select
                                    name="prioridade"
                                    id="prioridade"
                                    className={`form-select ${erros.prioridade ? "is-invalid" : ""}`}
                                    value={prioridade}
                                    onChange={(e) => setPrioridade(e.target.value)}
                                >
                                    <option value="">Selecione uma opção</option>
                                    <option value="baixa">Baixa</option>
                                    <option value="media">Média</option>
                                    <option value="alta">Alta</option>
                                </select>

                                <div className="invalid-feedback">
                                    {erros.prioridade}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={sending}
                            >
                                {sending ? "Enviando..." : "Enviar"}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}