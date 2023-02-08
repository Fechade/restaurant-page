function Header() {
    const contentContainer = document.querySelector("#container");
    const Header = document.createElement("div"); 
    Header.classList.add("Header");

    Header.innerHTML = `
        <nav>
            <h1>food-on-a-plate</h1>
            <ul id="tabs">
                <li><a href="#tabs-1">Home</a></li>
                <li><a href="#tabs-2">Menu</a></li>
                <li><a href="#tabs-3">Contact</a></li>
            </ul>
        </nav>
    `;

    return Header
}

export default Header; 