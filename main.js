// Simple banner slider (you can expand it later)
let currentSlide = 0;
const slides = [
  {
    subtitle: "Best Deal Online on smart watchs",
    text: "SMART WEARABLE.",
    img: "img/watch.png",
  },
  {
    subtitle: "Best Deal Online on smart phones",
    text: "NEW SMARTPHONE.",
    img: "img/phone1.png",
  },
];

const bannerText = document.querySelector(".banner-text h2");
const bannerImg = document.querySelector(".banner-content img");
const bannerSubtitle = document.querySelector(".banner-text .subtitle");

// Hamburger toggle for mobile
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
if (hamburger && navbar) {
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    hamburger.classList.toggle("is-active");
  });
  // close navbar when a link is clicked (good UX)
  navbar.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navbar.classList.remove("open");
      hamburger.classList.remove("is-active");
    }
  });
}

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateBanner();
});
document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateBanner();
});

function updateBanner() {
  const slide = slides[currentSlide];
  bannerSubtitle.textContent = slide.subtitle;
  bannerText.textContent = slide.text;
  bannerImg.src = slide.img;
}
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateBanner();
}, 5000);
