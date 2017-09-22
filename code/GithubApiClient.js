const fetch = require("node-fetch");

class GithubApiClient {

  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

(async (handle) => {
    const apiClient = new GithubApiClient();
    const user = await apiClient.fetchUser('shridhad');
    console.log(user.name, user.location);
})();
