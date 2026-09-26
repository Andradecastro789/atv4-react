import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "./css/App.css";

function App() {

    const post = {
        titulo: "A Evolução dos Videogames",
        autor: "Maria Eduarda",
        data: "26 de setembro de 2026",
        conteudo:
            "Os videogames fazem parte da vida de muitas pessoas. Desde os primeiros consoles até os modelos atuais, os jogos passaram por grandes mudanças."
    };

    return (
        <>
            <Header />

            <Navigation />

            <main className="layout">
                <Article
                    titulo={post.titulo}
                    autor={post.autor}
                    data={post.data}
                    conteudo={post.conteudo}
                />

                <Sidebar />
            </main>

            <Footer />
        </>
    );
}

export default App;