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
   });
});

//getting submenu height to set its position
const burgerMenu = document.querySelector(".burger--menu");

burgerButton.addEventListener("click", () => {   
   const menuHeight = burgerMenu.offsetHeight;
   burgerMenu.style.bottom = `${-menuHeight}px`;
});

