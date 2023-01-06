import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
import { store , connect } from '../store.js'


class Component extends LitElement{

    constructor(){
        super()

        this.disconnectedStore = connect(({ state }) => {
            if(this.sorting !== state.sorting) {this.sorting = state.sorting}
            if(this.search !== state.search) {this.search = state.search}
        })
    }
    

    disconnectedCallback() {this.disconnectedStore}
    
    render() {
        console.log(this.sorting)
        const changeHandler = event => {
            store.changeSorting(event.target.value)
        }
        const inputHandler = event => {
            store.changeSorting(event.target.value)
        }
        return html `
        <div>
            <label>
                <span>search</span>
                <input>
            </label>

            <label>
                sortiing
                <select @change="${changeHandler}">
                    <option value="a-z" .selected="${this.sorting === 'a-z'}">A - Z</option>
                    <option value= "z-a" .selected="${this.sorting === 'z-a'}">Z - A</option>
                    <option value="oldest-latest" .selected="${this.sorting === 'oldest-latest'}">oldest - lates</option>
                    <option value="latest-oldest" .selected="${this.sorting === 'latest - oldest'}">latest - oldest</option>

                </select>
            </label>
        </div>
        `
    }
}

customElements.define('podcast-controls', Component)

