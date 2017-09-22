const fetch = require("node-fetch");

const fetchFromGithub = async (endpoint) => {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

const showUserDetails = async (handle) => {
    const userPromise = fetchFromGithub(`/users/${handle}`);
    /** Github return 30 items by default. add `?per_page=n` parameter for custom size */
    const reposPromise = fetchFromGithub(`/users/${handle}/repos`);

    const user = await userPromise;
    const repos = await reposPromise;

    console.log(user.name);
    console.log(`${repos.length} repos`);
}

showUserDetails('shridhad');
