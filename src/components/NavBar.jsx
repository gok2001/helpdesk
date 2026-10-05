export default function NavBar({
    paginaAtiva,
    onMudarPagina
}) {
    return (
        <nav>
            <div>
                <button
                    className={paginaAtiva === "form" ? "active" : ""}
                    onClick={() => onMudarPagina("form")}
                >
                    Form
                </button>

                <button
                    className={paginaAtiva === "lista" ? "active" : ""}
                    onClick={() => onMudarPagina("lista")}
                >
                    Lista
                </button>
            </div>
        </nav>
    );
}