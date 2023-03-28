function loadCommits() {
    const BASE_URL = 'https://api.github.com/repos/';
    const username = document.getElementById('username');
    const repos = document.getElementById('repo');
    const commits = document.getElementById('commits');
    const usernameValue = username.value;
    const reposValue = repos.value;
    const loader = document.getElementById('loader');

    loader.style.display = 'block';
    fetch(`${BASE_URL}${usernameValue}/${reposValue}/commits`)
        .then((response) => response.json())
        .then((data) => {
            loader.style.display = 'none';
            data
                .forEach(({commit}) => {
                    const li = document.createElement('li');
                    li.textContent = `${commit.author.name}: ${commit.message}`;
                    commits.appendChild(li);
                });
        })
        .catch((err) => {
            const li = document.createElement('li');
            li.textContent = err.message;
            commits.appendChild(li);
        })

}