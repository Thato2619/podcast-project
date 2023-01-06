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
     //add styling 
     static styles = css`
        * {
            box-sizing: border-box;
        }

        .wrapper {
            max-width: 100%;
            min-height:20rem;
            margin-top:3px;
            margin-left:3px;
            margin-right:3px;
            display:flex;
            background-color: cadetblue;
            color: #EEE;
            border-radius: 5px;
            position:relative;
            z-index: 1;
        }

        .wrapper:hover{
            opacity:0.5;
        }

        .image{
            height:10rem;
            width:10rem;
        }

        .podcastImage .img{
            width:10rem;
            height: 10rem;
            border-bottom-left-radius:5px;
            border-top-left-radius:5px;
            object-fit:cover;
            position:absolute;
        }
        .title{
            color: #EEE;
            width: 10rem auto;
            text-align: center;
        }

        .title p{
            margin-top:5px;
            margin-left:5px;
            font-weight:bold;
        }

        .seasons{
            position:absolute;
            left:88%;
            font-size:small;
        }

        `;

    render(){
        const seasonText = `${this.seasons}  Season${this.seasons > 1 ? 's' : ''}`
        return html `
            <div class="wrapper" @click="${this.handleClicks}">
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