class Github {
  constructor() {
    this.clientId = "f8da3fd8e47829348b1b";
    this.client_secret = "6ba656d6a2df71639fa28c7467e27fe16b3ddfbb";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getProfile(user) {
    const profileRes = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposRes = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileRes.json();
    const repos = await reposRes.json();

    console.log(repos, "repos");
    return {
      profile,
      repos,
    };
  }
}
