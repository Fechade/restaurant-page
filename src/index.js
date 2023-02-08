import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Menu from './Components/Menu.js';
import Contact from './Components/Contact.js';


const container = document.querySelector("#tabs");

container.appendChild(Header());
container.appendChild(Home());
container.appendChild(Menu());
container.appendChild(Contact());