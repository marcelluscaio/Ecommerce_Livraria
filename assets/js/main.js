//burger class animation
const burgerButton = document.querySelector(".burger");
burgerButton.addEventListener("click", () => burgerButton.classList.toggle("close"));

//uncheck checkboxes when a new is checked
const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach((checkbox) => {
   checkbox.addEventListener("click", () => {
      if(checkbox.checked){
         checkboxes.forEach(checkbox => checkbox.checked = false);
         checkbox.checked = true;
      }
      //Adjusting menu position due to chenge in height
      /* const menuHeight = burgerMenu.offsetHeight;
      burgerMenu.style.bottom = `${-menuHeight}px`; */
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