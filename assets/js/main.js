//burger class animation
const burgerButton = document.querySelector(".burger");
burgerButton.addEventListener("click", () => burgerButton.classList.toggle("close"));

//uncheck checkboxes when a new is checked. Unrotate arrow.
const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach((checkbox) => {
   checkbox.addEventListener("click", () => {
      if(checkbox.checked){
         checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            const label = checkbox.previousElementSibling;
            label.style.transform = "translateY(-50%) rotate(0)";
            const submenu = checkbox.nextElementSibling;
            submenu.style.left = `0`;
         });
         checkbox.checked = true;
      }
   });
});

//uncheck checkboxes and unrotates arrows when menu is hidden
burgerButton.addEventListener("click", () => {
      checkboxes.forEach(checkbox => {checkbox.checked = false
      const label = checkbox.previousElementSibling;
      label.style.transform = "translateY(-50%) rotate(0)"   
   });   
});


//getting menu height to set its position
const burgerMenu = document.querySelector(".burger--menu");
const header = document.querySelector(".header");
burgerButton.addEventListener("click", () => {   
   const menuHeight = burgerMenu.offsetHeight;
   burgerMenu.style.bottom = `${-menuHeight}px`;
   header.style.transition = "margin-bottom .5s ease-out"
   header.style.marginBottom = `${menuHeight}px`;
   if(!burgerButton.classList.contains("close")){
      header.style.transition = "margin-bottom 1s ease-in"
      header.style.marginBottom = 0;
   }
});

//rotating arrow
checkboxes.forEach(checkbox => {
   checkbox.addEventListener("click", () => {   
      if(checkbox.checked){
         const label = checkbox.previousElementSibling;
         label.style.transform = "translateY(-50%) rotate(90deg)"
      } else if(!checkbox.checked){
         const label = checkbox.previousElementSibling;
         label.style.transform = "translateY(-50%) rotate(0)"
      }
   });
});

//getting submenu width to set its position
checkboxes.forEach((checkbox) => { 
   checkbox.addEventListener("click", () => {
      if(checkbox.checked){
      const submenu = checkbox.nextElementSibling;
      const submenuWidth = submenu.offsetWidth;
      submenu.style.left = `${-submenuWidth}px`;
      } else if(!checkbox.checked){
         const submenu = checkbox.nextElementSibling;
         submenu.style.left = `0`;
      };
   });
});

//swiper
const buttonsList = document.querySelectorAll(".swiper--wrapper--arrow");
const swiper = document.querySelector(".swiper--wrapper--list");
let transformRate = -200;

buttonsList.forEach(button => {
  button.addEventListener("click", (e) => {    
      e.target.disabled = true;
      let direction = e.target.dataset.direction;
      if(direction==="next"){
         swiper.style.transition = "transform 2s ease-in-out";
         transformRate -= 100;
         swiper.style.transform = `translateX(${transformRate}vw)`;
         if(transformRate<=-400){      
            setTimeout(function() {
               swiper.style.transition = "none";
               swiper.style.transition = "transform 0s ease-in-out";
               transformRate = -200;
               swiper.style.transform = `translateX(${transformRate}vw)`;
               }
            , 2000);
         }
      } else if(direction === "previous"){
         swiper.style.transition = "transform 2s ease-in-out";
         transformRate += 100;
         swiper.style.transform = `translateX(${transformRate}vw)`;
         if(transformRate>=0){
            setTimeout(function() {
               swiper.style.transition = "none";
               swiper.style.transition = "transform 0s ease-in-out";
               transformRate = -200;
               swiper.style.transform = `translateX(${transformRate}vw)`;
               }
            , 2000);
         }
      };
      setTimeout(() => e.target.disabled = false, 2000);
  });
});

//filter and scrolls to main
const buttonsParents = document.querySelectorAll(".submenu--item");
const filterButtons = [];
buttonsParents.forEach(parent => filterButtons.push(parent.firstElementChild));
const bookCards = document.querySelectorAll(".card-section--card");


filterButtons.forEach(button => {
   button.addEventListener("click", (e) => {
      const buttonType = e.target.dataset.buttontype;      
      bookCards.forEach(card => {
         if(card.dataset.booktype === buttonType){
            card.classList.remove("hide")
         } else {
            card.classList.add("hide");
         }
      });
      document.querySelector("main").scrollIntoView({behavior: 'smooth'});
      /*
      Another method 
      const mainPosition = document.querySelector("main").offsetTop;
      window.scrollTo(0, mainPosition);
       */
   });
});

//Books list

const books = [
   {
      "index": "1",
      "name": "As Intermitências da Morte",
      "author": "José Saramago",
      "price": "50",
   },
   {
      "index": "2",
      "name": "Memórias Póstumas de Brás Cubas",
      "author": "Machado de Assis",
      "price": "100",
   },
   {
      "index": "3",
      "name": "Vidas Secas",
      "author": "Graciliano Ramos",
      "price": "30",
   },
   {
      "index": "4",
      "name": "A Vítima tem sempre razão?",
      "author": "Francisco Bosco",
      "price": "80",
   },
   {
      "index": "5",
      "name": "Valsa Brasileira",
      "author": "Laura Carvalho",
      "price": "48",
   },
   {
      "index": "6",
      "name": "Batman: Venom",
      "author": "Denis O'Neil",
      "price": "150",
   },
   {
      "index": "7",
      "name": "Marvel 1602",
      "author": "Neil Gaiman",
      "price": "150",
   },
   {
      "index": "8",
      "name": "Beasts of Burden",
      "author": "Evan Dorkin | Jill Thompson",
      "price": "300",
   }
];