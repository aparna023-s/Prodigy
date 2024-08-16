const navbar = document.querySelector('.navbar');
const randomrgb = [Math.floor(Math.random() * 170),Math.floor(Math.random() * 91),Math.floor(Math.random() * 190)];
function calculateGradient(scrollPosition, s) {
    const normalizedScroll = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 255;
    const red = Math.round(255 - normalizedScroll);
    const green = Math.round(100 + normalizedScroll / 2);
    const blue = Math.round(100 - normalizedScroll / 2);
    const for360 = 90 + (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 270;
    const gradient = `linear-gradient(${for360}deg, rgb(${red}, ${green}, ${blue}), rgb(${s[0]}, ${s[1]}, 180))`;
    
    return gradient;
}

function changeNavbarGradient() {
    const gradient = calculateGradient(window.scrollY, randomrgb);
    navbar.style.backgroundImage = gradient;
}

window.addEventListener('load', () => {
    navbar.style.backgroundImage = calculateGradient(0, randomrgb); 
});

window.addEventListener('scroll', () => {
    changeNavbarGradient();
});
