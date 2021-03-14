const menuIcon = document.getElementById('menu-icon');
const mainMenu = document.getElementById('main-menu');
const subMenus = document.querySelectorAll(".submenu");
const menuLinks = document.querySelectorAll(".menu__link");

menuIcon.addEventListener("click", () =>{
   menuIcon.firstElementChild.classList.toggle("top-bar__icon--active");
   mainMenu.classList.toggle("navigation--active");
});

mainMenu.addEventListener("click", e =>{
   if(e.target.classList.contains("menu__link")){

      if(!e.target.classList.contains("menu__link--active")){
         menuLinks.forEach(item => item.classList.remove("menu__link--active"));
         subMenus.forEach(item => item.classList.remove("submenu--active"));
      };

      e.target.classList.toggle("menu__link--active");
      e.target.nextElementSibling.classList.toggle("submenu--active");
   };
});