import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
import { store } from '../store.js'


class Component extends LitElement{
    static get properties() {
        return{
            phase: {state: true},
        }
    }
/**
 * store connectors
 */
    constructor(){
        super()

        this.disconnectStore = connect((state) => {
            if (this.previews === state.preiews) return
            this.previews = state.preiews
        })
    }

    disconnectedCallback() {this.disconnectStore()}

    render() {
        const loadSingleHandler = () => store.loadSingle('10182')
        const loadListHandler = () => store.loadList()

        if (this.phase ==='loading'){
            return html`
            <div>Loading...</div>
            `
        }

        if(this.phase === 'error'){
            return html `
            <div>Something went wrong!</div>
            `
        }

        if (this.phase === 'list'){
            return html `
            <div>
                <button @click="${loadSingleHandler}">Go to single</button>
                <podcast-view-list></podcast-view-list>

            </div> `
        }

        if (this.phase === 'single') {
            return html `
            <div>
                <button @click="${loadListHandler}">Go to the list</button>
                <podcast-view-single></podcast-view-single>
            </div>
            `
        }

        throw new Error('inavlid view active')
    }

    connectedCallback(){
        this.innerHTML = `<div>podcast-app</div>`
    }
}

customElements.define('podcast-app', Component)



    