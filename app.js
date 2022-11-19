// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const hlButton = document.getElementById('half-life');
const body = document.body;

// Cached Theme on reload

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}

// Button Event Handlers

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    body.classList.replace('half-life', 'dark');
    localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    body.classList.replace('half-life', 'light');
    localStorage.setItem('theme', 'light');
};

hlButton.onclick = () => {
    body.classList.replace('dark', 'half-life')
    body.classList.replace('light', 'half-life')
    localStorage.setItem('theme', 'half-life')
}

/* scroll header */

const navigation = document.getElementById('bg-image')
const logo = document.getElementById('logo')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navigation.style.maxHeight = "10rem";
        logo.style.maxHeight = "180px";
        logo.style.maxWidth = "280px";
        logo.style.marginTop = "2.8rem";
    }
    
    else  {
        navigation.style.maxHeight = "30rem";
        logo.style.maxHeight = "375px";
        logo.style.maxWidth = "450px";
        logo.style.marginTop = "8rem";
       
    }
}