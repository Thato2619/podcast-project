import './components/api.js'

//manipulate the dom 

const htmlList = document.querySelector('#list')

//add async function to get all podcast needed
const getAllPodcasts = async () => {
    htmlList.innerHTML = `Loading...`

    //fetch API 
    const response = await fetch('https://podcast-api.netlify.app/shows')

    if(!response.ok){
        htmlList.innerText = "There seems to be an issue!"
        return
    }

    /**
     * type {preview[]}
     */

    const data = await response.json()

    let newHtml = ''

    for (const {id, title, seasons} of data) {
        newHtml = `
        ${newHtml}
            <li>
                <button data-preview-button="${id}">${title}</button>
                <span>(${seasons})</span>
            </li>
        `
    }
    htmlList.innerHTML = newHtml
