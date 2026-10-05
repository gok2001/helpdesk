import { useState } from 'react';
import FormChamado from './components/FormChamado';

function App() {
    const [solicitante, setSolicitante] = useState("");
    const [setor, setSetor] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [prioridade, setPrioridade] = useState("");

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
        />
    );
}

export default App
