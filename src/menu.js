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
                <h3 class="option-title">Title</h3>
                <p class="option-description">aaa</p>
            </div>
            <div class="option">
                <h3 class="option-title">Title</h3>
                <p class="option-description">bbb</p>
            </div>
            <div class="option">
                <h3 class="option-title">Title</h3>
                <p class="option-description">ccc</p>
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