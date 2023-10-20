const menu = document.getElementById("menu");

const burger = document.getElementById("burgerMenu");
const cross = document.getElementById("#cross");
console.log(burger);
burger.addEventListener("click", open);
cross.addEventListener("click",close);
function open(){
    menu.style.display="flex";
    menu.classList.toggle("open");
}

function close(){
   menu.style.display="none";
    menu.classList.remove("open");
}