import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
import { store } from '../store.js'

class Component extends LitElement{
    static get properties() {
        return{
            phase: {state: true},
        }
    }

    constructor(){
        super()
        const state = store.subscribe(this.storeChange)
        this.storeChange(state)
    }

    /**
     * 
     * @param {import('..types/').state} state 
     */
    storeChange(state) { 
        if(this.phase === state.phase) return
        this.phase = state.phase
    }
    connectedCallback(){store.subscribe(this.update)}
    disconnectedCallback(){store.unsubscribe(this.update)}

    loadSingle() {
        console.log('ncjsan')
        this.active = 'single'
    }

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