



import {LitElement, html,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
import { store , connect} from '../store.js'

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
    'Dec',]
class Component extends LitElement{
    static get properties() {
        return{
            preiews : {state: true },
            sorting : {state : true},
            search: {state : true},
        }
    }

    //add styling 
    static styles = css`
    li {
        border: 1px solid green
    }
    `;
/**
 * store connectors
 */
    constructor(){
        super()

        this.disconnectedStore = connect(({ state }) => {
            if(this.preiews!== state.previews) {this.previews = state.previews}
            if(this.sorting !== state.sorting) {this.sorting = state.sorting}
            if(this.search !== state.search) {this.search = state.search}
            

        })
    }
    disconnectedCallback() {this.disconnectedStore()}

    static styles = css`
    li{
        border: 1px solid coral;
    }
    `
    render() {
        console.log(this.sorting)
        const changeHandler = event => {
            store.changeSorting(event.target.value)
        
}
    }

    render() {
        /** 
         *  
         *  @type{import('..types/').preview[]} 
         */
        const preview = this.previews

        const sortedPreviews = preview.sort((a,b) => {
            if (this.sorting === 'a-z') return a.title.localecompare(b.title)
            if (this.sorting === 'z-a') return a.title.localecompare(a.title)

            const dateA = new Date(a.updated).getTime()
            const dateB = new Date(b.updated).getTime()

            if (this.sorting === 'oldest-latest') return dateA - dateB
        
            if (this.sorting === 'oldest-earliest') return dateA - dateB
            if (this.sorting === 'earliest-oldest') return dateA - dateA
            throw new Error('Invalid sorting')
        })
     
    
        const list = sortedPreviews.map(({title , id, updated}) => {
            const date = new Date(updated)
            const day = date.getDate().toString().padStart(2, '0')
            const month = MONTHS[date.getMonth() - 1]
            const year = date.getFullYear()
            const updatedString = `${day}/${month}/${year}`


            const clickHandler = () => store.loadSingle(id)


            return html `<li>
            <button @click="${clickHandler}">
            ${title}
        </button>
        <div> Updated : ${day}/${month}/${year}</div>
        </li>`
        })

        return html `
        <h1>Podcast List</h1>
        <podcast-controls></podcast-controls>
        <ul>${list}</ul>
        `
        
    }}
customElements.define('podcast-view-list', Component)





























//import {html, css, LitElement} from import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
//import {LitElement, html} from 'http s://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'
//import { store } from '../modules/store.js'

/*const MONTHS = [
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
]*/
    

/*class Component extends HTMLElement{
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
}*/


