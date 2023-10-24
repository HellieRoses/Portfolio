const menu = document.getElementById("menu");

const burger = document.getElementById("burgerMenu");
const cross = document.getElementById("#cross");

console.log(burger);
burger.addEventListener("click", open);
cross.addEventListener("click",close);
function open(){
    menu.style.display="flex";
    menu.style.animation="my_animation 0.2s ease-in";
}

function close(){

    menu.style.animation="my_animation2 0.2s ease-in-out";
    menu.style.display="none";

}