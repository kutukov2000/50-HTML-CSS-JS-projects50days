const searchButton = document.querySelector("img");
const input = document.querySelector("input");

searchButton.onclick = () => {
    if (input.classList.contains("nonFocused")) {
        input.classList = "";
    }
    else {
        input.classList.add("nonFocused");
    }
}