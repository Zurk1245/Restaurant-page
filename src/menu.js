import setEventListeners from './index';
import papas from './assets/papas.jpg';
import hamburguesa from './assets/burger.jpg';
import jugo from './assets/juice.jpg';
import helado from  './assets/icecream.jpg';

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
            <div id="1" class="option">
                <h3 class="option-title">BurgerHTML</h3>
                <p class="option-description">Nuestra hamburgesa por exelencia. Cheddar, panceta, cebolla criskpy y su medallón de carne. Es el plato que le da estructura a nuestro negocio!</p>
                <img src="${hamburguesa}" id="foto-hamburguesa" class="foto">
            </div>
            <div id="2" class="option">
                <h3 class="option-title">FritasCSS</h3>
                <p class="option-description">Porción de papas fritas bañada con queso cheddar y panceta. Es el plato que mejor estilo nos da ;)</p>
                <!-- <a href='https://www.freepik.es/fotos/comida'>Foto de Comida creado por stockking - www.freepik.es</a> -->
                <img src="${papas}" id="foto-papa" class="foto">
            </div>
            <div id="3" class="option">
                <h3 class="option-title">JugoScript</h3>
                <p class="option-description">Exprimido de naranja con pulpa frío y refrescante de 500ml. Sin este refresco, simplemente no tendríamos interactividad!</p>
                <img src="${jugo}" id="foto-jugo" class="foto">
            </div>
            <div id="4" class="option">
                <h3 class="option-title">WebIcePack</h3>
                <p class="option-description">Nuestro helado sabor dulce de leche con bombones de chocolate para sentir la dulzura máxima. Este helado organiza tu digestión y junta toda la dulzura para que te vayas contento!</p>
                <img src="${helado}" id="foto-helado" class="foto">
            </div>
        </div>
    </div>
    `;
    setEventListeners();
}

    
//aasdasda