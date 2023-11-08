/*----------------------------
nav bar menu started
----------------------------*/

let home = document.querySelector(".home");
let shop = document.querySelector(".shop");
let aboutUs = document.querySelector(".aboutUs");
let comments = document.querySelector(".comments");

home.addEventListener("click", function () {
    if (this.className = "home active") {
        this.className = "home active";
        shop.classList.remove("active");
        aboutUs.classList.remove("active");
        comments.classList.remove("active");
    } else {
        this.classList.add("active");
    }
})

shop.addEventListener("click", function () {
    if (this.className = "shop") {
        this.classList.add("active");
        home.classList.remove("active");
        aboutUs.classList.remove("active");
        comments.classList.remove("active");
    } else {
        this.className = "shop active";
    }
})

aboutUs.addEventListener("click", function () {
    if (this.className = "aboutUs") {
        this.classList.add("active");
        shop.classList.remove("active");
        home.classList.remove("active");
        comments.classList.remove("active");
    } else {
        this.className = "aboutUs active";
    }
})

comments.addEventListener("click", function () {
    if (this.className = "comments") {
        this.classList.add("active");
        shop.classList.remove("active");
        home.classList.remove("active");
        aboutUs.classList.remove("active");
    } else {
        this.className = "comments active";
    }
})

/*----------------------------
nav bar menu ended
----------------------------*/
/*----------------------------
typing effects started
----------------------------*/
let textP = document.querySelector(".typing");
let text = "Elevate Your Style: Where Fashion Meets Passion.";
let index = 1;

let typeWriter = () => {
    let slice = text.slice(0, index);

    textP.innerText = slice;
    index > text.length ? index = 1 : index++;

    setTimeout(function () {
        typeWriter();
    }, 100);
}
typeWriter();
/*----------------------------
typing effects started
----------------------------*/

const url = "https://script.google.com/macros/s/AKfycbyQrbby_ckmmnIJYOHW8Yu1jIHlS0dF8tz9GtcsbCGj7Opp32OpzvP-7sx2iubnHony/exec"

let form = document.querySelector("form");

form.addEventListener("submit", function(e){
    console.log(e);
    
    e.preventDefault();

    let d = new FormData(form);

    fetch(url, {
        method: "POST",
        body: d,
    }).then(res => {
        return res.text();
    }).then(finalRes => {
        console.log(finalRes);
        form.reset();
    });
})

