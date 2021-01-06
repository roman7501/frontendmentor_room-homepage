const btnToggleMobileNav = document.getElementById("btn-toggle-mobile-nav");
const nav = document.getElementById("nav");

const btnLeft = document.getElementById("slider-left");
const btnRight = document.getElementById("slider-right");

const slide = document.getElementById("slide");

btnToggleMobileNav.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const slides = [
  {
    title: "Discover innovative ways to decorate",
    text:
      "  We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    image: "./images/desktop-image-hero-1.jpg",
  },
  {
    title: "We are available all across the globe",
    text:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    image: "./images/desktop-image-hero-2.jpg",
  },
  {
    title: "Manufactured with the best materials",
    text:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    image: "./images/desktop-image-hero-3.jpg",
  },
];
let index = 0;

displaySlide(index);

function displaySlide(i) {
  console.log("displaySlide", i);
  //   Reset
  slide.innerHTML = "";

  //   Add text
  slide.innerHTML = `
   <div class="left">
            <div class="slider--button">
              <button id="slider-left">
                <img src="./images/icon-angle-left.svg" alt="left" />
              </button>
              <button id="slider-right">
                <img src="./images/icon-angle-right.svg" alt="right" />
              </button>
            </div>
          </div>
          <div class="right">
            <div class="right--container">
              <h2>${slides[i].title}</h2>
              <p>${slides[i].text}
              </p>
              <a href="#">Shop Now <img src="./images/icon-arrow.svg" alt="arrow" /></a>
            </div>
          </div>
   
  `;

  const btnLeft = document.getElementById("slider-left");
  const btnRight = document.getElementById("slider-right");

  const leftEl = document.querySelector(".left");

  btnLeft.addEventListener("click", () => {
    if (index > 0) {
      index--;
      displaySlide(index);
    }
  });
  btnRight.addEventListener("click", () => {
    if (index < 2) {
      index++;
      displaySlide(index);
    }
  });

  //   Add image
  leftEl.style.backgroundImage = `url(${slides[i].image})`;
  console.log("image", leftEl.style.backgroundImage);
}
