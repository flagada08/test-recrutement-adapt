class HeaderComponent extends HTMLElement {    
    connectedCallback() {
        this.innerHTML=`
            <header>
                <nav>
                    <a href="index.html" id="logo">
                        <img id="logo-client" src="img/logo-client.jpg" alt="Agence Démo">
                    </a>
                    <i class="fas fa-bars" id="ham-menu"></i>
                    <ul id="nav-bar">
                        <li>
                            <a class="btn has-spinner" href="offres.php">NOS OFFRES</a>
                        </li>
                        <li>
                            <a href="#agence">L'AGENCE</a>
                        </li>
                        <li>
                            <a href="#services">NOS SERVICES</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                        <li>
                            <a href="#compte">MON COMPTE</a>
                        </li>
                        <li>
                            <div class="heart" id="heart-button">
                                <i class="fa-regular fa-heart"></i>
                                <span class="counter">0</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        `
    }
};

customElements.define("header-component", HeaderComponent);

// déclaration + assignation des variables pour récupérer 
// les éléments du DOM
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let btnHeart = document.getElementById("heart-button");
// listener pour l'évènement "click" sur l'élément icone du menu burger
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
// itération sur les éléments li afin de leur ajouter un listener
if(navBar == "active") {
    navLinks.forEach((navLinks) => {
      navLinks.addEventListener("click", () => {
        navBar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");
      });
    });
}
// listener pour l'évènement "click" sur l'élément boutton coeur
btnHeart.addEventListener("click", () => {
  let cntValue = document.querySelector(".counter");
  let count = cntValue.innerHTML;
  let counter = Number(count)+1;
  cntValue.innerHTML = counter;
  console.log("lovelovelove");
});