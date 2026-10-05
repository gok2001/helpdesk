import { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import FormChamado from './components/FormChamado';
import NavBar from './components/NavBar';
import ListaChamados from './components/ListaChamados';

const url = "http://localhost:3000/chamados"

function App() {
    const [solicitante, setSolicitante] = useState("");
    const [setor, setSetor] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [prioridade, setPrioridade] = useState("");

    const { data: chamados, setData: setChamados, loading } = useFetch(url);

    const [paginaAtiva, onMudarPagina] = useState("form");

    const [sending, setSending] = useState(false);

    const [erros, setErros] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const erros = validar();

        if (Object.keys(erros).length > 0) {
            return;
        }

        setSending(true);

        const chamado = {
            solicitante,
            setor,
            tipo,
            descricao,
            prioridade
        }

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chamado)
        });

        const addedChamado = await res.json();

        setChamados((prev) => [...prev, addedChamado]);

        setSolicitante("");
        setSetor("")
        setTipo("");
        setDescricao("");
        setPrioridade("");

        setSending(false);
        
        onMudarPagina("lista");
    }

    function validar() {
        const erros = {};

        if (solicitante.length < 3) {
            erros.solicitante = "Mínimo 3 caracteres";
        }

        if (!setor) {
            erros.setor = "Obrigatório escolher uma opção";
        }

        if (!tipo) {
            erros.tipo = "Obrigatório escolher uma opção";
        }

        if (descricao.length < 10) {
            erros.descricao = "Mínimo 10 caracteres";
        }

        if (!prioridade) {
            erros.prioridade = "Obrigatório escolher uma opção";
        }

        setErros(erros);

        return erros;
    }

    return (
        <div>
            <NavBar
                paginaAtiva={paginaAtiva}
                onMudarPagina={onMudarPagina}
            />

            <main className="container py-5">
                {paginaAtiva === "form" && (
                    <FormChamado
                        solicitante={solicitante}
                        setSolicitante={setSolicitante}
                        setor={setor}
                        setSetor={setSetor}
                        tipo={tipo}
                        setTipo={setTipo}
                        descricao={descricao}
                        setDescricao={setDescricao}
                        prioridade={prioridade}
                        setPrioridade={setPrioridade}
                        sending={sending}
                        handleSubmit={handleSubmit}
                        erros={erros}
                    />
                )}

                {paginaAtiva === "lista" && (
                    <ListaChamados
                        chamados={chamados}
                        loading={loading}
                    />
                )}
            </main>
        </div>
    );
}

export default App
