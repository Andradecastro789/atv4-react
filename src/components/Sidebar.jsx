import "../css/Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>Posts relacionados</h2>

            <ul>
                <li>A história do Atari</li>
                <li>A evolução dos consoles</li>
                <li>Nintendo e seus jogos</li>
                <li>A era do PlayStation</li>
            </ul>
        </aside>
    );
}

export default Sidebar;