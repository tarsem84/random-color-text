
let button = document.querySelector("#generateBtn");

let clearButton = document.querySelector("#clearBtn");

let container = document.querySelector("#textContainer");

let words = [
    "Hello!",
    "Creative",
    "Dream",
    "JavaScript",
    "Awesome",
    "Imagine",
    "DOM Magic",
    "Explore"
];

let fonts = [
    "Arial",
    "Georgia",
    "Courier New",
    "Verdana",
    "Impact"
];

let colors = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "deeppink",
    "teal",
    "black"
];

button.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * words.length);

    let randomWord = words[randomIndex];

    let text = document.createElement("p");
    text.textContent = randomWord;

    let randomSize = Math.floor(Math.random() * 41) + 20;

    text.style.fontSize = randomSize + "px";

    let randomRotation = Math.floor(Math.random() * 61) - 30;

    text.style.transform = "rotate(" + randomRotation + "deg)";

    let randomFontIndex = Math.floor(Math.random() * fonts.length);

    text.style.fontFamily = fonts[randomFontIndex];


    text.style.position = "absolute";

    container.appendChild(text);

    let maxX = Math.max(
        0,
        container.clientWidth - text.offsetWidth
    );

    let maxY = Math.max(
        0,
        container.clientHeight - text.offsetHeight
    );

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    text.style.left = randomX + "px";
    text.style.top = randomY + "px";


    let randomColorIndex = Math.floor(Math.random() * colors.length);

    text.style.color = colors[randomColorIndex];

    container.appendChild(text);
});

clearButton.addEventListener("click", function () {
    container.innerHTML = "";
});