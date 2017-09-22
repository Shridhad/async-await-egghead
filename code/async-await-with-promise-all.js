const fetch = require("node-fetch");

const fetchFromGithub = async (endpoint) => {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

const showUserDetails = async (handle) => {
    /**
      You can also use ES2015 destructuring syntax.
      const [user, repos] = await Promise.all([]);
    */
    return await Promise.all([
      fetchFromGithub(`/users/${handle}`),
      fetchFromGithub(`/users/${handle}/repos`)
    ]).then(([user, repos]) => {
      console.log(user.name);
      console.log(`${repos.length} repos`);
    }).catch((error) => {
      console.error(`Erorr: ${error.message}`);
    })
}

showUserDetails('shridhad');
