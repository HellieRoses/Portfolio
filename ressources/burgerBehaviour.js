const menu = document.getElementById("menu");

const burger = document.getElementById("burgerMenu");

console.log(burger);
burger.addEventListener("click", ()=>open());

function open(){
    console.log("test");
    if(menu.style.display==="none") {
        menu.style.display="flex";
    }else{
        menu.style.display="none";
    }
}

function close(){
    if(menu.style)
        menu.style.visibility ="hidden";
}