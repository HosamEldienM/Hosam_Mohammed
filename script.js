let menuBullets = document.querySelectorAll(".element");
let generalSection = document.querySelector(".general");
let sections = document.querySelectorAll("section");
let aboutMeButton = document.querySelector("#more");

menuBullets.forEach((el) => {
    el.addEventListener("click", aboutMe)
})

aboutMeButton.addEventListener("click", (e) => {
  sections.forEach((sec) => {
    sec.classList.remove("active");
  });
  let addSection = document.querySelector(`.about`);
  addSection.classList.add("active");

   menuBullets.forEach((ele) => {
     ele.classList.remove("active");
   });
   document.querySelector("#about-element").classList.add("active");
});

function aboutMe() {
  sections.forEach((sec) => {
    sec.classList.remove("active");
  });

  let sectionName = this.getAttribute("data-secName");
  let addSection = document.querySelector(`.${sectionName}`);
  
  addSection.classList.add("active");

  menuBullets.forEach((ele) => {
    ele.classList.remove("active");
  });
  this.classList.add("active");
}


var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

// select popup elements 
let popup = document.querySelector(".popup-back");
let popupTitle = document.querySelector(".popup-box div");
let popupImg = document.querySelector(".popup-back img");
let popupClose = document.querySelector(".close-button");

// select gallery images and add the event
let ourGallery = document.querySelectorAll(".swiper-slide img");
let re = /(https?:\/\/)?(\w*\.)+com\/\w|\W\w{4}/g;

ourGallery.forEach((img) => {
  img.addEventListener("click", function (e) {
    let link = e.target.getAttribute('data-link');
    popup.style.display = "block";
    console.log(e.target);
    popupTitle.innerHTML = `<h3>${e.target.alt}</h3>
   <p class="preview">Preview: <a href="${e.target.getAttribute('data-link')}" target="_blank">${link.match(re).join()}</a> </p>
        <p class="languages">Languages: ${e.target.getAttribute("data-lang")}</p> 
         <img src="${e.target.src}" />`;
    // popupImg.src = `${e.target.src}`;
  })
});

// close popup
popupClose.addEventListener("click", () => {
    popup.style.display = "none";
})