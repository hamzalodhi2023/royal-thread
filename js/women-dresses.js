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
const stuffType = document.querySelector("#stuff-type");
const madeType = document.querySelector("#made-type");
const dressType = document.querySelector("#dress-type");

const applyBtn = document.querySelector(".applyBtn");
const clearBtn = document.querySelector(".clearBtn");

applyBtn.addEventListener('click', function () {

  
  for (let product = 0; product < productsCards.length; product++) {
    
    const productName = productsCards[product].querySelector(".product-name");
    
    shouldDisplay = true;

    if (
      stuffType.value !== "ALL" && productName.textContent.includes(stuffType.value) === false
    ) {

      shouldDisplay = false;

    }

    if (
      madeType.value !== "ALL" && productName.textContent.includes(madeType.value) === false
    ) {

      shouldDisplay = false;

    }

    if (
      dressType.value !== "ALL" && productName.textContent.includes(dressType.value) === false
    ) {

      shouldDisplay = false;

    }

    productsCards[product].style.display = shouldDisplay ? "flex" : "none";

  }
})

clearBtn.addEventListener('click', function(){
  window.location.reload();
})

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

const formCustomerOrderNumber = document.querySelector("#order-number");
const formCustomerName = document.querySelector("#customer-name");
const formCustomerEmail = document.querySelector("#customer-email");
const formCustomerWhatsapp = document.querySelector("#customer-whatsapp");
const formCustomerAddress = document.querySelector("#customer-address");

const formProductName = document.querySelector("#product-name");
const formProductCode = document.querySelector("#product-code");
const formProductSize = document.querySelector("#product-size");
const formProductColor = document.querySelector("#product-color");
const formProductSellingPrice = document.querySelector("#selling-price");
const formProductQuantity = document.querySelector("#product-quantity");
const formProductTotalAmount = document.querySelector("#product-grand-total");

const productsCards = document.querySelectorAll(".card");

/*----------------------------
form product details logic started
----------------------------*/

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




  const currentCardOrderBtn = currentCard.querySelector(".order-now-btn");
  const currentCardProductName = currentCard.querySelector(".card-right h3");
  const currentCardProductCode = currentCard.querySelector("#product-card-code");
  const currentCardProductSize = currentCard.querySelector("#size");
  const currentCardProductColor = currentCard.querySelector("#color");

  let creatingOrderNo = "WPC-" + Math.floor(Math.random() * 10000);

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

/*----------------------------
form Sending Order Data Logic started
----------------------------*/

const form = document.querySelector("#form");

/*----------------------------
form data google sheet logic started
----------------------------*/

const url = "https://script.google.com/macros/s/AKfycbz41tHMJrYs5O65ndjhx9U9MvOE7Id0lnI2Nnzg5BBkl8935iwETBHKRYaKnfc8Uhie/exec";

const successModal = document.querySelector("#modal-box");
const body = document.body;

successModal.querySelector("button").onclick = () => {
  successModal.style.display = "none";
  body.style.pointerEvents = "all";
}

form.addEventListener('submit', (e) => {

  e.preventDefault();

  let d = new FormData(form);

  fetch(url, {
    method: 'POST',
    body: d,
  }).then(res => {

    return res.text();

  }).then(finalRes => {
    
    setTimeout(function(){
      form.reset();
      popup.style.display = "none";
      body.style.pointerEvents = "none";
      successModal.style.display = "flex";
    }, 4000);
    
  })


  /*----------------------------
  form data google sheet logic ended
  ----------------------------*/

  /*----------------------------
  form data whatsapp logic started
  ----------------------------*/

  let whatsappUrl =
    "https://wa.me/923350020257?text=" +
    "_*ROYAL THREAD*_" + "%0a" + "%0a" +
    "*CUSTOMER DETAILS*" + "%0a" + "%0a" +
    "*Name* : " + formCustomerName.value + "%0a" +
    "*Email* : " + formCustomerEmail.value + "%0a" +
    "*WhatsApp* : " + formCustomerWhatsapp.value + "%0a" +
    "*Shipping Address* : " + formCustomerAddress.value + "%0a" + "%0a" +
    "*PRODUCT DETAILS*" + "%0a" + "%0a" +
    "*Order Number* : " + formCustomerOrderNumber.value + "%0a" +
    "*Name* : " + formProductName.value + "%0a" +
    "*Code* : " + formProductCode.value + "%0a" +
    "*Size* : " + formProductSize.value + "%0a" +
    "*Color* : " + formProductColor.value + "%0a" +
    "*Price* : " + `PKR. ${formProductSellingPrice.value}` + "%0a" +
    "*Quantity* : " + formProductQuantity.value + "%0a" +
    "*Total Amount* : " + `PKR. ${formProductTotalAmount.value}` + "%0a" + "%0a" +
    "*Thank You For Choosing Royal Thread, Where Elegance Meets Style.*"

  window.open(whatsappUrl, "_blank");

  /*----------------------------
  form data whatsapp logic ended
  ----------------------------*/
  /*----------------------------
  form data email logic started
  ----------------------------*/

  let emailBody =
    "<b>CUSTOMER DETAILS</b>" +
    "<br>" +
    "<br>" +
    "<b>Name: </b>" +
    formCustomerName.value +
    "<br>" +
    "<b>Email: </b>" +
    formCustomerEmail.value +
    "<br>" +
    "<b>WhatsApp: </b>" +
    formCustomerWhatsapp.value +
    "<br>" +
    "<b>Shipping Address: </b>" +
    formCustomerAddress.value +
    "<br>" +
    "<br>" +
    "<b>ORDER DETAILS</b>" +
    "<br>" +
    "<br>" +
    "<b>Order Number: </b>" +
    formCustomerOrderNumber.value +
    "<br>" +
    "<b>Name: </b>" +
    formProductName.value +
    "<br>" +
    "<b>Code: </b>" +
    formProductCode.value +
    "<br>" +
    "<b>Size: </b>" +
    formProductSize.value +
    "<br>" +
    "<b>Color: </b>" +
    formProductColor.value +
    "<br>" +
    "<b>Price: </b>PKR. " +
    formProductSellingPrice.value +
    "<br>" +
    "<b>Quantity: </b>" +
    formProductQuantity.value +
    "<br>" +
    "<b>Total Amount: </b>PKR. " +
    formProductTotalAmount.value +
    "<br>" +
    "<br>" +
    "<b>Thank you for choosing Royal Thread, where elegance meets style.</b>";

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hafsalodhi2023@gmail.com",
    Password: "CBDA46B74169BB40DA5B3E4FDF0527EEDC5B",
    To: formCustomerEmail.value,
    From: "hafsalodhi2023@gmail.com",
    Subject: "ORDER RECEIPT",
    Body: emailBody
  })
});

/*----------------------------
form data email logic ended
----------------------------*/

/*----------------------------
form Sending Order Data Logic ended
----------------------------*/

/*----------------------------
Image zoom effects started
----------------------------*/

const cardsLeftDiv = document.querySelectorAll('.card-left');

cardsLeftDiv.forEach(function(item) {
  let zoomedDiv = item.nextElementSibling.children[0];
  let zoomedImg = zoomedDiv.querySelector("img");
  let cardsLeftDivImg = item.querySelector("img");

  zoomedDiv.style.display = "none";
  zoomedImg.src = cardsLeftDivImg.src;

  item.addEventListener('mousemove', function(event) {
    zoomedImg.src = cardsLeftDivImg.src;

    zoomedDiv.style.display = "block";
    const containerRect = item.getBoundingClientRect();
    const clientX = event.clientX - containerRect.left;
    const clientY = event.clientY - containerRect.top;

    const translateX = ((clientX / containerRect.width) * 100) - 50;
    const translateY = ((clientY / containerRect.height) * 100) - 50;

    const zoomedX = -translateX * 2;
    const zoomedY = -translateY * 2;

    zoomedImg.style.transform = `translate(${zoomedX}%, ${zoomedY}%) scale(3)`;
  });

  item.addEventListener('mouseleave', function() {
    zoomedImg.style.transform = 'translate(0%, 0%) scale(1)';
    zoomedDiv.style.display = "none";
  });
});

/*----------------------------
 Image zoom effects ended
----------------------------*/ 

/*----------------------------
filter logic started
-----------------------------*/
let filterIcon = document.querySelector(".fa-filter");
let filter = document.querySelector("#filter");
let filterCrossIcon = document.querySelector("#filter .fa-circle-xmark");
let filterApply = document.querySelector(".applyBtn");

filterIcon.addEventListener("click", function(){
  filter.style.left = "0%";
})

filterCrossIcon.addEventListener("click", function(){
  filter.style.left = "-100%";
})

filterApply.addEventListener("click", function(){
  filter.style.left = "-100%";
})
/*----------------------------
filter logic started
-----------------------------*/
/*----------------------------
hamburger logic started
----------------------------*/
let hamburgerContainer = document.querySelector(".hamburger-container");
let hamburgerIcon = document.querySelector(".fa-bars-staggered");

hamburgerIcon.addEventListener("click", function(){
    hamburgerContainer.style.left = "0%"
})

let crossIcon = document.querySelector(".fa-circle-xmark");

crossIcon.addEventListener("click", function(){
    hamburgerContainer.style.left = "100%";
})

let hamburgerMenus = document.querySelectorAll(".hamburger-container ul li a");

hamburgerMenus.forEach((menu)=>{
    
    menu.addEventListener('click', function(){
        hamburgerContainer.style.left = "100%"
    })
    
})
/*----------------------------
hamburger logic ended
----------------------------*/  