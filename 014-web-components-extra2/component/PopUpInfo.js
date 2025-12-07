class PopUpInfo extends HTMLElement {
  constructor() {
        // Sempre chame super primeiro no construtor
        super();

        // escreva a funcionalidade do elemento aqui
        this.attachShadow({ mode: "open" });

        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");
        
        const icon = wrapper.appendChild(document.createElement("span"));
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", 0);
        
        const img = icon.appendChild(document.createElement("img"));
        
        img.src = this.hasAttribute("img")
        ? this.getAttribute("img")
        : "img/default.png";

        const info = wrapper.appendChild(document.createElement("span"));
        info.setAttribute("class", "info");
        info.textContent = this.getAttribute("data-text");

        const style = document.createElement("style");
        style.textContent = ".wrapper {" + this.shadowRoot.append(style, wrapper);
    }
}

customElements.define("popup-info",PopUpInfo)

