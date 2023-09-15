const menu = document.querySelector("menu");
const menuButton = document.querySelector(".menuButton");
const article = document.querySelector("article");

menuButton.onclick = () => {
    if (menuButton.classList.length === 1 || menuButton.classList.contains("rotateToBurger")) {
        menuButton.classList.add("rotateToClose");
        menuButton.classList.remove("rotateToBurger");

        article.classList.remove("returnArticle");
        article.classList.add("rotateArticle")

        menu.classList.remove("hideMenu");
        menu.classList.add("displayMenu");
    }
    else if (menuButton.classList.contains("rotateToClose")) {
        menuButton.classList.remove("rotateToClose");
        menuButton.classList.add("rotateToBurger");

        article.classList.remove("rotateArticle");
        article.classList.add("returnArticle");

        menu.classList.remove("displayMenu");
        menu.classList.add("hideMenu");
    }
}