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
         if(transformRate>=400){
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

//filter
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
   });
});

/* filterButtons.addEventListener("click", console.log("Fuiclicado")) */