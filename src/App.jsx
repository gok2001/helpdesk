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

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        />
    );
}

export default App
