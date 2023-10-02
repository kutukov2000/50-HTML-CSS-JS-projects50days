const body=document.querySelector("body");

const leftDiv=document.querySelector("#leftDiv");
const rightDiv=document.querySelector("#rightDiv");

leftDiv.addEventListener('mouseenter',()=>{
    body.classList.add("leftSide");
})

leftDiv.addEventListener('mouseleave',()=>{
    body.classList.remove("leftSide");
})

rightDiv.addEventListener('mouseenter',()=>{
    body.classList.add("rightSide");
})

rightDiv.addEventListener('mouseleave',()=>{
    body.classList.remove("rightSide");
})
