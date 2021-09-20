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
            <p id="contacto">Nos encontramos en Palermo, el barrio más pintoresco de la ciudad de Buenos Aires, cerca del Rosedal de Palermo. Vení a conocer la experiencia JSbar. Vení a disfrutar el sabor del conocimiento!</p>
            <h2 id="saludo">Te esperamos!</h2>
        </div>
    </div>
    `;
    setEventListeners();
}