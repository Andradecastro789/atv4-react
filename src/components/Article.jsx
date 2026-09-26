import "../css/Article.css";

function Article({ titulo, autor, data, conteudo }) {
    return (
        <article className="article" id="inicio">

            <h2>{titulo}</h2>

            <div className="informacoes">
                <p>
                    <strong>Autor:</strong> {autor}
                </p>

                <p>
                    <strong>Data:</strong> {data}
                </p>
            </div>

            <p className="conteudo">
                {conteudo}
            </p>

            <section id="historia">
                <h3>História dos Videogames</h3>

                <p>
                    A história dos videogames começou com experiências
                    eletrônicas que deram origem aos primeiros jogos digitais.
                    Com o passar dos anos, os consoles ficaram mais modernos
                    e os jogos ganharam gráficos, sons e histórias cada vez
                    mais elaboradas.
                </p>
            </section>

            <section id="consoles">
                <h3>Evolução dos Consoles</h3>

                <p>
                    Os consoles evoluíram bastante ao longo das décadas.
                    Empresas como Nintendo, Sony, Microsoft e outras
                    contribuíram para o crescimento da indústria dos
                    videogames.
                </p>
            </section>

            <section id="comentarios">
                <h3>Comentários</h3>

                <p>
                    Os videogames continuam evoluindo e fazem parte do
                    entretenimento de milhões de pessoas ao redor do mundo.
                </p>
            </section>

        </article>
    );
}

export default Article;