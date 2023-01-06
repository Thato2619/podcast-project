import './components/modules/main.js'
import './components/podacast-view-list.js'
import './components/podcast-app.js'
import './components/podcast-controls.js'
import './components/podcast-episode.js'
import './components/podcast-preview.js'
import './components/podcast-controls.js'
import {getData} from "./JS/fetchData.js"
import {filterByGenre, filterByTitle} from "./JS/helperFunction.js"

let showAPI = "https://podcast-api.netlify.app/shows";
let showData = await getData(showAPI);

//async function
async function renderSingle(podcastID, podcastImage){
  document.querySelector("#app").innerHTML = ""
  let thisShow = `https://podcast-api.netlify.app/id/${podcastID}`
  await getData(thisShow)

  const nav = document.getElementById("nav")
  const home = document.createElement("li")
  home.id = "HOME"
  home.innerHTML = html `
  <button>HOME</button>
  `
  //add eventlistener
  home.addEventListener("click", () => {
    renderAll()
  }) 

  

}

/*//manipulate the dom
const htmlList = document.querySelector("#app");

//add async function to get all podcast needed
const getAllPodcasts = async () => {
  htmlList.innerHTML = `Loading...`;

  //fetch API
  const response = await fetch("https://podcast-api.netlify.app/shows");

  if (!response.ok) {
    htmlList.innerText = "There seems to be an issue!";
    return;
  }

  /**
   * type {preview[]}
   */

  /*const data = await response.json();

  let newHtml = "";

  for (const { id, title, seasons } of data) {
    newHtml = `
        ${newHtml}
            <li>
                <button data-preview-button="${id}">${title}</button>
                <span>(${seasons})</span>
            </li>
        `;
  }
  htmlList.innerHTML = newHtml;
};
/**
 * @param {string} id
 */
/*const getSinglePodcast = async (id) => {
  htmlList.innerHTML = `Loading...`;

  const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);

  if (!response.ok) {
    htmlList.innerHTML = "Something went wrong!";
    return;
  }

  /**
   * @type {show}
   */
  /*const data = await response.json();

  let seasonsList = "";

  for (const { image, title } of data.seasons) {
    seasonsList = `
            ${seasonsList}

            <li>
                <img src="${image} width="100" height="100">
                ${title}
            </li>
        `;
  }

  htmlList.innerHTML = `
    <button data-action="back> BACK </button>
    <h2>${data.title}</h2>
    <ul>${seasonsList}</ul>
    `;
};
document.body.addEventListener("click", (event) => {
  const { previewButton, action } = event.target.dataset;

  if (action && action === "back") {
    getAllPodcasts();
    return;
  }

  if (!previewButton) return;
  getAllPodcasts(previewButton);
  return;
});

getAllPodcasts();*/
