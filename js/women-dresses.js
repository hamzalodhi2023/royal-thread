/*----------------------------
CART MENU STARTED
----------------------------*/
const cartIcon = document.querySelector(".fa-cart-shopping");
const cartContainer = document.querySelector(".cart-container");
const crossIcon = document.querySelector(".fa-circle-xmark");

cartIcon.addEventListener('click', function(){
  cartContainer.style.left = "0%";
})

crossIcon.addEventListener("click", function(){
  cartContainer.style.left = "100%";
})
/*----------------------------
CART MENU ENDED
----------------------------*/

/*----------------------------
CARDS DATA FETCHING LOGIC STARTED
----------------------------*/

let api = "json/women-dresses.json";
let cardContainer = document.querySelector(".collection-div");

fetch(api)
   .then((res) => {
      return res.json();
   })
   .then((jsonData) => {
      let products = jsonData.description;

      

      products.forEach((data)=>{
         cardContainer.append(card_Func(data.images[1], data.productName, data.productCode, data.productSize, data.productColor[0], data.productDiscount, data.productSellingPrice));
      })
   })


function card_Func(images, productName, productCode, productSize, productColor, productPrice, productDiscount, productSellingPrice){
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
          <div class="card-left"><img src="${images}" alt="" /></div>
          <div class="card-right">
            <h3>${productName}</h3>
            <div><span>Product Code :</span><span>${productCode}</span></div>
            <div>
              <span>Size :</span
              ><span
                ><select name="" id="size">
                <option value="${productSize}">${productSize}</option>
                <option value="Medium">M</option>
                <option value="Large">L</option>
                <option value="Extra Large">XL</option>
                </select></span
              >
            </div>
            <div>
              <span>Color :</span
              ><span
                ><select name="" id="">
                  <option value="${productColor}">${productColor}</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Orange">Orange</option>
                </select></span
              >
            </div>
            <div><span>Price</span><span>${productPrice}</span></div>
            <div><span>Discount:</span><span>${productDiscount}</span></div>
            <div><span>Selling Price:</span><span>${productSellingPrice}</span></div>
            <div id="photo-change-btn">
              <a href="">&#171;</a><a href="">&#187;</a>
            </div>
            <div id="add-cart-btn">
              <a href=""
                >ADD TO CART &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                  class="fa-solid fa-cart-shopping fa-bounce"
                  style="font-size: 14px"
                ></i
              ></a>
            </div>
          </div>
  `
      return card;
}

/*----------------------------
CARDS DATA FETCHING LOGIC ENDED
----------------------------*/