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

                </button>

                <button
                    className={paginaAtiva === "lista" ? "active" : ""}
                    onClick={() => onMudarPagina("lista")}
                >

                </button>
            </div>
        </nav>
    );
}