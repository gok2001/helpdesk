import { useState } from 'react';
import FormChamado from './components/FormChamado';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/chamados"

function App() {
    const [solicitante, setSolicitante] = useState("");
    const [setor, setSetor] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [prioridade, setPrioridade] = useState("");

    const { data: chamados, setData: setChamados, loading } = useFetch(url);

    const [erros, setErros] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const erros = validar();

        if (Object.keys(erros).length > 0) {
            return;
        }

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
            handleSubmit={handleSubmit}
            erros={erros}
        />
    );
}

export default App
