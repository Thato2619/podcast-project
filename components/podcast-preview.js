import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
import { store } from '../modules/store.js'

class Component extends LitElement{
    static get properties(){
        return{
           key: {type: String},
           image: {type: String},
           label: {type: String},
           seasons: {type: Number},
        }
    }
    render(){
        const seasonText = `${this.seasons}  Season${this.seasons > 1 ? 's' : ''}`
        return html `
            <div>
                <div class="image">
                    <img src="${this.image}">
                </div>

                <div class="title">
                    <p>${this.label}</p>
                </div>

                <div class="seasons">
                    <p>{seasonText}</p>
                </div>
            </div>`
    }

    connectedCallback(){
        this.innerHTML = `<div>podcast-app</div>`
    }
}

customElements.define('podcast-preview', Component)