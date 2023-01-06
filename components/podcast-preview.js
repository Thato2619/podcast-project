class Component extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `<div>podcast-app</div>`
    }
}

customElements.define('podcast-preview', Component)