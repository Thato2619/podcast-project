/**
 * @typeof {object} episode
 * @property {number} episode
 * @property {string} description
 * @property {string} title
 * @property {string} file
 */

/**
 * @typeof {object} season
 * @property {number} season
 * @property {string} title
 * @property {string} image
 * @property {episode[]} episodes
 */

/**
 * @typeof {object} show
 * @property {string} id
 * @property {string} title
 * @property {season[]} seasons
 * @property {string} image
 * @protected {string[]} genres
 * @property {string} updated
 */

/**
 * @param {string} id
 * @returns {Promise <string>}
 */

const getOnlySingleShow = async (id) => {
  const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);

  if (!response.ok) {
    return "<div>Something went wrong</div>";
    return;
  }

  /**
   * @type {show}
   */
  const data = await response.json();

  const result = data.seasons.map(({ image, title }) => {
    return `
        <li>
            <img src="${image}" width="100" height="100">
            ${title}
        <li>
    `;
  });

  return `
    <button data-action="back">BACK</button>
    <h2>${data.title}</h2>
    <ul>${result.join("\n")}</ul>
    `;
};

export default getOnlySingleShow;
