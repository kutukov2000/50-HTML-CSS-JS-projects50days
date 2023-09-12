const container = document.getElementById("container").querySelectorAll(".img");
container.forEach(element => {
    element.onclick=()=>{
        container.forEach(element => {
            element.classList="img";
        });

        element.classList.add("clicked")
    }
});
