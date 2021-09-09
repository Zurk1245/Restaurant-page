import setEventListeners from './index';

export default function displayContactHTML() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <nav id="nav">
        <ul>
            <li id="home" class="link">Inicio</li>
            <li id="menu" class="link">Menu</li>
            <li id="contact" class="selected-link">Contacto</li>        
        </ul>
    </nav>
    <div id="structure">
        <h1 id="title">Contacto</h1>

        <div id='information'>
            
            <h2>Te esperamos!</h2>
        </div>
    </div>
    `;
    setEventListeners();
}