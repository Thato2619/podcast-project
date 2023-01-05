import { html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
import { store } from '../../store.js'


class BaseElement extends LitElement{
    constructor(){
        super()
        this.store = store

        if(this.StoreChange) {
            store.subscribe(this.StoreChange)
        }


        const state = store.subscribe(this.storeChange)
    }
    }


    /**
     * @param {import('../../types').state} state
     */
    storeChange = {state} => {
        if(this.phase === state.phase) return
        this.phase= state.phase
    }

    disconnectedCallback() { store.unsubscribe(this.storeChange) }
    static styles = css `
    li {
        border: 1px solid green(--primary-green);
    }
    `

    rener
