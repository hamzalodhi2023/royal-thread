const cartIcon = document.querySelector(".fa-cart-shopping");
const cartContainer = document.querySelector(".cart-container");
const crossIcon = document.querySelector(".fa-circle-xmark")

cartIcon.addEventListener('click', function(){
  cartContainer.style.left = "0%";
})

crossIcon.addEventListener("click", function(){
  cartContainer.style.left = "100%";
})