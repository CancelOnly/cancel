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
};

// Scroll header

const navigation = document.getElementById('bg-image')
const logo = document.getElementById('logo')
const media = document.getElementById('media-icons')

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        navigation.style.maxHeight = "10rem";
        navigation.style.filter = "brightness(.6)";
        logo.style.maxHeight = "180px";
        logo.style.maxWidth = "280px";
        logo.style.marginTop = "2.8rem";
        media.style.marginTop = "5rem";
        media.style.fontSize = "1.3rem";
    }

    else {
        navigation.style.maxHeight = "30rem";
        navigation.style.filter = "brightness(.9)";
        logo.style.maxHeight = "375px";
        logo.style.maxWidth = "450px";
        logo.style.marginTop = "8rem";
        media.style.marginTop = "25rem";
        media.style.fontSize = "1.8rem";

    }
}

// Card animation

const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for (const card of document.querySelectorAll(".card")) {
    card.onmousemove = e => handleOnMouseMove(e);
}

// Scroll Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
