/*----------------------------
small images slider started
----------------------------*/

const smallImages = document.querySelectorAll("#photo-change img");

smallImages.forEach(smallImage => {
  smallImage.addEventListener("click", function () {
    let smallImagesParent = smallImage.parentElement;
    let photoChangeDivParent = smallImagesParent.parentElement;
    let photoChangeDivParentSibling = photoChangeDivParent.previousElementSibling;
    let photoChangeDivParentSiblingChild = photoChangeDivParentSibling.children[0];

    photoChangeDivParentSiblingChild.src = smallImage.src;
  })
});

/*----------------------------
small images slider ended
----------------------------*/

/*----------------------------
filter logic started
----------------------------*/

/*----------------------------
filter logic ended
----------------------------*/

/*----------------------------
form popup started
----------------------------*/

let popup = document.getElementById("order-form");
let OrderButton = document.querySelectorAll(".order-now-btn");
let popupCloseButton = document.getElementsByClassName("fa-xmark")[0];

/*----------------------------
form popup opening logic started
----------------------------*/

OrderButton.forEach(btn => {

  btn.addEventListener("click", function () {

    popup.style.display = "flex";
    popup.classList.add("popup-opening-animation");

  })
})

/*----------------------------
form popup opening logic ended
----------------------------*/


/*----------------------------
form popup closing logic started
----------------------------*/

popupCloseButton.addEventListener("click", function () {

  popup.style.display = "none";
  popup.classList.remove("popup-opening-animation")

})

/*----------------------------
form popup closing logic ended
----------------------------*/

/*----------------------------
form popup ended
----------------------------*/

/*----------------------------
form product details logic started
----------------------------*/
const productsCards = document.querySelectorAll(".card");


productsCards.forEach(currentCard => {

  /*----------------------------
  product discount logic started
  ----------------------------*/

  const currentCardProductPrice = currentCard.querySelector("#product-card-price");
  const currentCardProductDiscount = currentCard.querySelector("#product-card-discount");
  const currentCardProductTotalAmount = currentCard.querySelector("#product-card-total-amount");

  let calculatingDiscount = (parseInt(currentCardProductPrice.textContent) / 100) * (100 - parseInt(currentCardProductDiscount.textContent));

  currentCardProductTotalAmount.textContent = calculatingDiscount;

  /*----------------------------
  product discount logic ended
  ----------------------------*/

  const formProductName = document.querySelector("#product-name");
  const formProductCode = document.querySelector("#product-code");
  const formProductSize = document.querySelector("#product-size");
  const formProductColor = document.querySelector("#product-color");
  const formProductSellingPrice = document.querySelector("#selling-price");
  const formProductQuantity = document.querySelector("#product-quantity");
  const formProductTotalAmount = document.querySelector("#product-grand-total");
  
  const formCustomerOrderNumber = document.querySelector("#order-number");

  const currentCardOrderBtn = currentCard.querySelector(".order-now-btn");
  const currentCardProductName = currentCard.querySelector(".card-right h3");
  const currentCardProductCode = currentCard.querySelector("#product-card-code");
  const currentCardProductSize = currentCard.querySelector("#size");
  const currentCardProductColor = currentCard.querySelector("#color");
  
  let creatingOrderNo = "WC-" + Math.floor(Math.random() * 10000);

  currentCardOrderBtn.addEventListener('click', function () {

    formProductName.value = currentCardProductName.textContent;
    formProductCode.value = currentCardProductCode.textContent;
    formProductSize.value = currentCardProductSize.value;
    formProductColor.value = currentCardProductColor.value;
    formProductSellingPrice.value = currentCardProductTotalAmount.textContent;
    formProductTotalAmount.value = formProductSellingPrice.value;
    formCustomerOrderNumber.value = creatingOrderNo;

    /*----------------------------
    form grand total logic started
    ----------------------------*/

    formProductQuantity.addEventListener("input", () => {

      let calculatingFormTotalAmount = parseInt(formProductQuantity.value) * parseInt(formProductSellingPrice.value);

      if (isNaN(calculatingFormTotalAmount)) {

        formProductTotalAmount.value = "Invalid";

      } else {

        formProductTotalAmount.value = calculatingFormTotalAmount;

      }
    })

    /*----------------------------
    form grand total logic ended
    ----------------------------*/


  })

})

/*----------------------------
form product details logic ended
----------------------------*/

