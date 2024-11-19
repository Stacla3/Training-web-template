const containerNav = document.querySelector(".container-nav-link");
const containerNavAll = document.querySelector(".container-nav");
const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".link-item");
const btnSubmit = document.querySelector(".btn-submit");
const btnArrowLeft = document.querySelector(".btn-arrow-left");
const btnArrowRight = document.querySelector(".btn-arrow-right");
const carousels = document.querySelectorAll(".carousel");
const linkContactUs = document.querySelector(".link-contact-us");
const rightContact = document.querySelector(".right-contact");
const contacts = document.querySelector(".contacts");

const handleNavEvent = function (e) {
  e.preventDefault();
  const linkEl = e.target.closest(".link-item");
  const section = document.querySelector(
    `#${linkEl.textContent.toLowerCase()}`
  );
  if (!linkEl || !section) return;
  const topPosition =
    section.getBoundingClientRect().top +
    window.scrollY -
    containerNavAll.getBoundingClientRect().height;
  window.scrollTo({
    top: topPosition,
    behavior: "smooth",
  });
};

const handleObserveSection = function (entries) {
  entries.forEach((e) => {
    const linkEl = document.querySelector(`a[href="#${e.target.id}"]`);
    if (e.isIntersecting) {
      e.target.classList.remove("hidden");
      linkEl?.classList.add("active-link");
    }
    if (!e.isIntersecting) {
      linkEl?.classList.remove("active-link");
    }
  });
};

const optionObserveSection = {
  root: null,
  threshold: 0.2,
};

const observeSection = new IntersectionObserver(
  handleObserveSection,
  optionObserveSection
);

const resetPreventDefault = function (e) {
  e.preventDefault();
};

let curCurous = 1;
const defaultCarousel = function () {
  carousels.forEach((carous, i) => {
    carous.style.transform = `translateX(${(i - curCurous) * 100}%)`;
  });
};

const transformCarousels = function () {
  carousels.forEach((carous, i) => {
    carous.style.transform = `translateX(${(i - curCurous) * 100}%)`;
  });
};

const handleCarouselLeft = function () {
  curCurous--;
  if (curCurous >= 0) {
    transformCarousels();
  } else {
    curCurous = carousels.length - 1;
    defaultCarousel();
  }
};

const handleCarouselRight = function () {
  curCurous++;
  if (curCurous < carousels.length) {
    transformCarousels();
  } else {
    curCurous = 0;
    defaultCarousel();
  }
};

const startWebApp = function () {
  sections.forEach((s) => {
    if (!s.classList.contains("section-main")) {
      s.classList.add("hidden");
      observeSection.observe(s);
    }
  });
};

containerNav.addEventListener("click", handleNavEvent);
btnSubmit.addEventListener("click", resetPreventDefault);
btnArrowLeft.addEventListener("click", handleCarouselLeft);
btnArrowRight.addEventListener("click", handleCarouselRight);
linkContactUs.addEventListener("click", resetPreventDefault);
rightContact.addEventListener("click", resetPreventDefault);
contacts.addEventListener("click", resetPreventDefault);

startWebApp();
