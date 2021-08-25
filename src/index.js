//import background from "./assets/background";
import computer_logo from "./assets/computer.png";
import contactHTML from "./contact";
import './style.css';

const content = document.getElementById('content');

const homeHTML = () => {
    const myComputer = new Image();
    myComputer.src = computer_logo;
    myComputer.id = 'computer_logo';
    content.innerHTML = `
        <nav id="nav">
            <ul>
                <li id="home" class="link">Inicio</li>
                <li id="menu" class="link">Menu</li>
                <li id="contact" class="link">Contacto</li>        
            </ul>
        </nav>
        <div id="structure">
            <h1 id="title">TechBar.js</h1>

            <div id='information'>
                <h3>El tech-bar mas fabuloso de Buenos Aires!</h3>
            </div>
        </div>
        `;
    const structure = document.getElementById('structure');
    const information = document.getElementById('information');
    structure.insertBefore(myComputer, information);
}


window.onload = () => {
    homeHTML();

    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');

    home.addEventListener('click', () => {
        console.log('gas');
    });
    menu.addEventListener('click', () => {
        contactHTML();
    });
    contact.addEventListener('click', () => {
        console.log('gas');
    });
}

