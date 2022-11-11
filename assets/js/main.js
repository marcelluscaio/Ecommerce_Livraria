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

//uncheck checkboxes when menu is hidden
burgerButton.addEventListener("click", () => {
   checkboxes.forEach(checkbox => checkbox.checked = false);
});


//getting menu height to set its position
const burgerMenu = document.querySelector(".burger--menu");
burgerButton.addEventListener("click", () => {   
   const menuHeight = burgerMenu.offsetHeight;
   burgerMenu.style.bottom = `${-menuHeight}px`;
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