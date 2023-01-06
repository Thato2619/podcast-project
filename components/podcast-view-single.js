

import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
import { store } from '../modules/store.js'


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
        const state = store.subscribe(this.storeChange)
        this.storeChange(state)
    }

    /**
     * 
     * @param {import('..types/').state} state 
     */
    storeChange = (state) =>  { 
        if(this.phase === state.phase) return
        this.phase = state.phase
    }
   
    disconnectedCallback(){store.unsubscribe(this.storeChange)}

      //add styling to h1 tag
      static styles = css`
      h1 {
          color: coral;
      }
     `;

    render(){
        /**
         * @type {import('../types').show[]}
         */
        const show = this.single

        return html `

        <h1>
            ${show.title || ''}
        </h1>
        `
    }

}

customElements.define('podcast-view-single', Component)












/*import {html, css, LitElement} from import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
import {LitElement, html} from 'http s://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

class Component extends HTMLElement{
    static get properties() {
        return{
            previews: {state : true},
            sorting: {state : true},
            search: {state : true},
        }
    }

    constructor(){
        super()

        this.disconnectedStore = connect((state) =>{
            if (this.previews !== state.previews) { this.previews = state.previews }
            if (this.sorting !== state.sorting) { this.sorting = state.sorting }
            if (this.search !== state.search) {this.search = state.search}
        })
    }

    disconnectedCallBack() {this.disconnectedStore( )}
    
    static styles = css`
    li {
        border: 1px solid green;
    }
    `

    render(){
        /**
         * @type {import ('../types').preview[]}
         */
        /*const preview = this.previews
        const sortedPreviews = preview.sort((a,b) => a.title.localeCompare(b.title))

        const list = sortedPreviews.map(({title, id}) =>{
            const clickHandler = () => Store.loadSingle(id)

            return html `
            <li>
                <button @click = "${clickHandler}">
                ${title}
                </button>
            </li>
            `
        })

        return html `
        <h1>Podcast List</h1>
        <podcast-controls></podcast-controls>
        <ul>${list}</ul>
        `
    }
}
*/