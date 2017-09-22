const fetch = require("node-fetch");

async function fetchGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;

  const response = await fetch(url);
  const json = await response.json();

  if (response.status !== 200) {
    throw new Error(json.message);
  }

  return json;
}

/** Error handling with .catch method */
fetchGithubUser("shridhad123")
  .then(user => console.log(user.name))
  .catch(error => console.error(`Error: ${error.message}`));


/** Error handling with try-catch block */
(async () => {
    try {
      const user = await fetchGithubUser('shridhad123');
      console.log(user.name);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
})();
