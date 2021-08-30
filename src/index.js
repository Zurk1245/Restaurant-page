//import background from "./assets/background";
import computer_logo from "./assets/computer.png";
import menuHTML from "./menu";
import contactHTML from "./contact";
import './style.css';

const content = document.getElementById('content');

export const homeHTML = () => {
    const myComputer = new Image();
    myComputer.src = computer_logo;
    myComputer.id = 'computer_logo';
    content.innerHTML = `
        <nav id="nav">
            <ul>
                <li id="home" class="selected-link">Inicio</li>
                <li id="menu" class="link">Menu</li>
                <li id="contact" class="link">Contacto</li>        
            </ul>
        </nav>
        <div id="structure">
            <h1 id="title">barTech.js</h1>

            <div id='information'>
                <h3>Somos el mejor tech-bar de Buenos Aires y el único con temática orientada a programación! Vení a disfrutar el sabor del conocimiento </h3>
            </div>
        </div>
        `;
    const structure = document.getElementById('structure');
    const information = document.getElementById('information');
    structure.insertBefore(myComputer, information);

    setEventListeners();
}

export default function setEventListeners() {
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');

    home.addEventListener('click', () => {
        homeHTML();
    });
    menu.addEventListener('click', () => {
        menuHTML();
    });
    contact.addEventListener('click', () => {
        contactHTML();
    });
    home.style.cssText = '';
}

window.onload = () => {
    homeHTML();
}

function linkStyle(element) {
    element.classList.remove('link');
    element.classList.add('selected-link');
}