import {html, css, LitElement} from import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
import {LitElement, html} from 'http s://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]
    

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

        this,disconnectedStore = connect((state) =>{
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
        const preview = this.previews
        const sortedPreviews = preview.sort((a,b) => {
            if (this.sorting === 'a-z') return a.title.localeCompare(b.title))
            if (this.sorting === 'z-a') return b.title.localeCompare(a.title))
        }
        
    

        const list = sortedPreviews.map(({title, id}) => {
            const updatedString = `${date.getDate().toString.padStart(2, '0')}/${MONTHS[date.getMonth - 1](date.getFullYear())}}`
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


customElements.define('podcast-view-list', Component)