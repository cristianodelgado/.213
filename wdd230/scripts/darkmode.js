const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "white";
        main.style.color = "black";
        modeButton.textContent = "🔆";
    }
    else {
        main.style.background = "black";
        main.style.color = "white";
        modeButton.textContent = "🕶️";
    }
});