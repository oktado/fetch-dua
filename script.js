let gitUser = document.getElementById('gitUser');
const url = "https://api.github.com/users/oktado";

let getData = async () => {
    let response = await fetch (url);
    let data = await response.json();
    console.log(data.log);
    let userGit = 
    `<img class="container">
        <img src="${data.avatar_url}"></img>
        <h1>GIT Username : ${data.login}</h1>
        <h3>ID : ${data.id}</h3>
        <h3>Repository : ${data.public_repos}</h3>
     </div>`
    

    gitUser.innerHTML += userGit
}

getData()