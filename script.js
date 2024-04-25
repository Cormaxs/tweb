const boton = document.querySelector(".boton");
const olMenu = document.querySelector(".olMenu");
const Menu = document.querySelector(".menu");


boton.addEventListener("click", function(){
    olMenu.classList.toggle("activo");
    Menu.classList.toggle("activo");
    
})



