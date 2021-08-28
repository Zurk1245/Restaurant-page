import setEventListeners from './index';

export default function displayMenuHTML() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <nav id="nav">
        <ul>
            <li id="home" class="link">Inicio</li>
            <li id="menu" class="selected-link">Menu</li>
            <li id="contact" class="link">Contacto</li>        
        </ul>
    </nav>
    <div id="structure">
        <h1 id="title">Menu</h1>

        <div id='options'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    `;
    setEventListeners();
}