import './components/api.js'

//manipulate the dom 

const htmlList = document.querySelector('#list')

//add async function to get all podcast needed
const getAllPodcasts = async () => {
    htmlList.innerHTML = `Loading...`
}
