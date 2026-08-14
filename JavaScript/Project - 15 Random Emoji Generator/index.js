const API_KEY = '2b3024fc984f584fb0e12357057d3d954f724b0d';

const rndbtn = document.getElementsByClassName('rndbtn')[0];
const emoji = document.getElementsByClassName('emoji')[0];
const emojiName = document.getElementsByClassName('emojiName')[0];
const inputbox = document.getElementsByClassName('inputbox')[0];
const srcbtn = document.getElementsByClassName('srcbtn')[0];

function displayResult(result) {
    let random = Math.floor(Math.random() * result.length);
    emoji.textContent = result[random].character;

    let name = result[random].unicodeName;
    if (name.includes('.')) {
        emojiName.textContent = name.split('.')[1].substring(2);
    } else {
        emojiName.textContent = name;
    }
}

async function fetchRandomEmoji() {
    try {
        let res = await fetch(`https://emoji-api.com/emojis?access_key=${API_KEY}`);
        let result = await res.json();
        displayResult(result);
    } catch (error) {
        console.log(error);
        alert(error + " try limit is over");
    }
}

async function searchEmoji(val) {
    try {
        let res = await fetch(`https://emoji-api.com/emojis?search=${val}&access_key=${API_KEY}`);
        let result = await res.json();
        if (result.status === 'error') {
            alert('no emoji found');
            return;
        }
        displayResult(result);
    } catch (error) {
        console.log(error);
        alert(error + " try limit is over");
    }
}

function inputDetected() {
    let val = inputbox.value.trim();
    if (val !== '') {
        searchEmoji(val);
        inputbox.value = '';
    }
}

rndbtn.addEventListener('click', fetchRandomEmoji);
srcbtn.addEventListener('click', inputDetected);
inputbox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        inputDetected();
    }
});