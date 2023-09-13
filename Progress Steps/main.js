const circles = document.getElementById("container").querySelectorAll(".circle");
const lines = document.getElementById("container").querySelectorAll(".line");

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let lastCheckedCircleIndex = 0;
SetButtonStyle();

nextButton.onclick = () => {
    if (lastCheckedCircleIndex === circles.length - 1) {
        return;
    }
    circles[lastCheckedCircleIndex + 1].classList.add("checked");
    lines[lastCheckedCircleIndex].classList.add("checked");

    lastCheckedCircleIndex++;
    SetButtonStyle();
}

prevButton.onclick = () => {
    if (lastCheckedCircleIndex === 0) {
        return;
    }
    circles[lastCheckedCircleIndex].classList.remove("checked");
    lines[lastCheckedCircleIndex - 1].classList.remove("checked");

    lastCheckedCircleIndex--;
    SetButtonStyle();
}

function SetButtonStyle() {
    if (lastCheckedCircleIndex === 0) {
        prevButton.classList = "disabled";
        nextButton.classList = "enabled";

        prevButton.disabled = true;
        nextButton.disabled = false;
    }
    else if (lastCheckedCircleIndex === 3) {
        prevButton.classList = "enabled";
        nextButton.classList = "disabled";

        nextButton.disabled = true;
        prevButton.disabled = false;
    }
    else {
        prevButton.classList = "enabled";
        nextButton.classList = "enabled";

        nextButton.disabled = false;
        prevButton.disabled = false;
    }
}