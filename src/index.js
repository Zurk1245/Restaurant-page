import computerlogo from "./assets/computer.png";
import menuHTML from "./menu";
import contactHTML from "./contact";
import './style.css';

const content = document.getElementById('content');

export const homeHTML = () => {
    content.innerHTML = `
        <nav id="nav">
            <ul>
                <li id="home" class="selected-link">Inicio</li>
                <li id="menu" class="link">Menu</li>
                <li id="contact" class="link">Contacto</li>        
            </ul>
        </nav>
        <div id="structure">
            <h1 id="title">JSbar</h1>

            <div id='information'>
                <img src="${computerlogo}" id="computer_logo">
                <h3>Somos el mejor tech-bar de Buenos Aires y el único con temática orientada a programación! </h3>
                <h4>Contamos con platos ricos para que disfrutes del mejor sabor y tenemos el ambiente perfecto para pasarla excelente: bar temático, luces especiales, materiales ambientados y hasta los mozos tienen su traje del conocimiento. Vení a conocer la experiencia JSbar. Vení a disfrutar el sabor del conocimiento</h4>
            </div>
        </div>
        `;
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