import getAllShows from "./getAllShows.js";
import getOnlySingleShow from "./getOnlySingleShow.js";

const app = document.querySelector("#app");
if (!app) throw new Error("No app element in HTML");

const init = async () => {
  const response = await getAllShows();
  app.innerHTML = response;
};

app.addEventListener("click", async (event) => {
  const { previewButton, action } = event.target.dataset;

  if (action && action === "back") {
    app.innerHTML = "<div>Loading...</div>";
    const response = await getAllShows(previewButton);
    app.innerHTML = response;
  }

  if (previewButton) {
    app.innerHTML = "<div>Loading...</div>";
    const response = await getOnlySingleShow(previewButton);
    app.innerHTML = response;
  }
});

init();
