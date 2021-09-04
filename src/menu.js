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
            <div class="option">
                <h3 class="option-title">BurgerHTML</h3>
                <p class="option-description">Nuestra hamburgesa por exelencia. Cheddar, panceta, cebolla criskpy y su medallón de carne. Es el plato que le da estructura a nuestro negocio!</p>
            </div>
            <div class="option">
                <h3 class="option-title">FritasCSS</h3>
                <p class="option-description">Porción de papas fritas bañada con queso cheddar y panceta. Es el plato que mejor estilo nos da ;)</p>
            </div>
            <div class="option">
                <h3 class="option-title">JugoScript</h3>
                <p class="option-description">Exprimido de naranja con pulpa frío y refrescante de 500ml. Sin este refresco, simplemente no tendríamos interactividad!</p>
            </div>
            <div class="option">
                <h3 class="option-title">Title</h3>
                <p class="option-description">ddd</p>
            </div>
        </div>
    </div>
    `;
    setEventListeners();
}