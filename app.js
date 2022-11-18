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
    body.classList.replace('dark','half-life')
    body.classList.replace('light', 'half-life')
    localStorage.setItem('theme', 'half-life')
}

/* hover fx */
