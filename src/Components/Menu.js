function Menu() {
    const Menu = document.createElement("div"); 
    Menu.classList.add("Menu");
    Menu.id = "tabs-2"

    Menu.innerHTML = `
        <h1>
            Menu
        </h1>
        <div class="menu">
        </div>
    `;

    return Menu;
}

export default Menu; 