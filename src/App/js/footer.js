class FooterComponent extends HTMLElement {    
    connectedCallback() {
        this.innerHTML=`
            <footer>
                <h1>AGENCE DÉMO</h1>
                <p>
                    550 avenue de Celleneuse 34500 MONTPELLIER -  tel. 04 90 30 45 15
                </p>
                <button class="btn-contact" type="button">
                    <i class="fa-regular fa-envelope"></i>
                    <a class="btn has-spinner">NOUS ÉCRIRE</a>
                </button>
                <div class="social">
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </footer>
        `
    }
};

customElements.define("footer-component", FooterComponent);