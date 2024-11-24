const btnLeanrMore = document.querySelector(".btn--learnmore");
const sectionAdvan = document.querySelector(".container--advantage");
const accFaq = document.querySelector(".accordion--faq");
const introTopic = document.querySelector(".intro--topic");
const introDescript = document.querySelector(".intro--description");
const btnGetStarted = document.querySelector(".btn--getstarted--intro");
const btnLearnMore = document.querySelector(".btn--learnmore");
const introSponser = document.querySelector(".intro--sponsers");
const introImage = document.querySelector(".intro--image");
const introElements = [
  introTopic,
  introDescript,
  btnGetStarted,
  btnLeanrMore,
  introSponser,
  introImage,
];
const timeBreakSecond = 200;

const moveElIntro = function (element) {
  element.classList.add("move--el--intro");
};

const loopLoadElement = function () {
  introElements.forEach((el, index) => {
    setTimeout(() => {
      moveElIntro(el);
    }, (index + 1) * timeBreakSecond);
  });
};

const scrollToSecrionAdvan = function () {
  sectionAdvan.scrollIntoView({ behavior: "smooth" });
};

const openAccordionFaq = function (e) {
  const accHeader = e.target.closest(".header--acc--faq");
  const acc = e.target.closest(".acc--faq");
  const plusIcon = acc.querySelector(".plus--icon");
  const accDescipt = acc.querySelector(".active--acc--faq");
  if (!accHeader) return;
  accDescipt.classList.toggle("hidden--acc--faq");
  plusIcon.classList.toggle("rotate--plus--icon");
};

(function () {
  loopLoadElement();
})();

btnLeanrMore.addEventListener("click", scrollToSecrionAdvan);
accFaq.addEventListener("click", openAccordionFaq);
