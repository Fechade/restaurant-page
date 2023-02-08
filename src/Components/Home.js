function Home() {
    const Home = document.createElement("div"); 
    Home.classList.add("Home");
    Home.id= "tabs-1"

    Home.innerHTML = `
        <div class="body">
            <h2>Come on down for some delicious cuisine!</h2>
            <p>Tasty and Affordable!</p>
            <button>Order Now</button>
        </div>
        <div class="info">
            <div class="location">
                1024 Oakwood Ave
                San Diego, CA 22434
            </div>
            <div class="location">
                Mon-Thurs:8am-8pm
                Fri-Sun:8am-11pm
            </div>
        </div>
    `;

    return Home;
}

export default Home; 