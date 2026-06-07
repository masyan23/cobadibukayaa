const video = document.getElementById("flowerVideo");
const title = document.getElementById("title");
const message = document.getElementById("message");
const music = document.getElementById("music");

const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");

openBtn.addEventListener("click", () => {

welcome.style.display = "none";

mainContent.style.display = "block";

music.play();

video.play();

});

video.addEventListener("ended", () => {

title.classList.add("show");

setTimeout(() => {
    message.classList.add("show");
}, 1000);

startHearts();

});

function startHearts(){

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "🌸";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 400);

}

