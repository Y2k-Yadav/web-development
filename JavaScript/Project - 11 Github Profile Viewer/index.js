let user = document.getElementById("username");
let btn = document.getElementsByClassName("button1")[0];
let view = document.getElementById("viewprofile");
let heading = document.getElementById("heading");
let currentUrl = 'https://github.com/octocat';

user.addEventListener('focus', () => {
    user.placeholder = '';
});

user.addEventListener('blur', () => {
    user.placeholder = 'Enter your github user';
});

// single place that resets everything back to the Octocat default -
// used by both the 403 and 404 branches so the HTML block isn't repeated
function resetToDefault() {
    document.getElementById("userprofile").innerHTML = `
        <div class="profile">
            <div class="profile-image">
                <img id="profilepicture"
                    src="https://avatars.githubusercontent.com/u/583231?v=4"
                    alt="octocat avatar">
            </div>
            <div class="profile-info">
                <p id="login">monalisa octocat</p>
                <p class="userid">@octocat</p>
            </div>
        </div>
        <div class="bio">
            <p>GitHub mascot and friend to all developers.</p>
        </div>
    `;

    document.getElementById("followerslist").innerHTML = `
        <div class="detail repos">
            <p>08</p>
            <p>Repositories</p>
        </div>
        <div class="detail followers">
            <p>23.2K</p>
            <p>Followers</p>
        </div>
        <div class="detail following">
            <p>09</p>
            <p>Following</p>
        </div>
        <div class="detail joined">
            <p>2011</p>
            <p>Joined GitHub</p>
        </div>
    `;

    currentUrl = 'https://github.com/octocat';
}

async function getUser(username) {
    if (username !== '') {

        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        if (response.status === 403) {
            console.log("Rate limit hit, try again later");
            heading.innerText = `Rate Limit Hit - Try Later`;
            resetToDefault();
            return;
        }

        if (response.status === 404) {
            heading.innerText = `User Not Found!!!`;
            console.log("User not found");
            resetToDefault();
            return;
        }

        display(data);
        currentUrl = data.html_url; // just save it, view button opens it later on click
    }
}


function handle_search() {
    let userId = user.value.trim();
    if (userId != '') {
        document.getElementById("userprofile").innerHTML = `<span class="loader"></span>`;
        heading.innerText = `GitHub Profile Viewer`;
        getUser(userId);
    }
}



user.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        handle_search();
    }
});
btn.addEventListener('click', handle_search);

function display({ created_at, avatar_url, name, login, bio, public_repos, followers, following }) {

    let date = new Date(created_at);
    let year = date.getFullYear();

    document.getElementById("userprofile").innerHTML = `
        <div class="profile">
            <div class="profile-image">
                <img id="profilepicture" src="${avatar_url}" alt="${name}'s avatar">
            </div>
            <div class="profile-info">
                <p id="login">${name ? name : "No name available"}</p>
                <p class="userid">@${login}</p>
            </div>
        </div>
        <div class="bio">
            <p>${bio ? bio : "No bio available"}</p>
        </div>
    `;

    document.getElementById("followerslist").innerHTML = `
        <div class="detail repos">
            <p>${public_repos}</p>
            <p>Repositories</p>
        </div>
        <div class="detail followers">
            <p>${followers}</p>
            <p>Followers</p>
        </div>
        <div class="detail following">
            <p>${following}</p>
            <p>Following</p>
        </div>
        <div class="detail joined">
            <p>${year}</p>
            <p>Joined GitHub</p>
        </div>
    `;
}

view.addEventListener('click', () => {
    newpage(currentUrl);
});

function newpage(link) {
    if (!link) {
        console.log("Search a user first");
        return;
    }
    window.open(link, '_blank');
}