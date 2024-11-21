const slideImage = document.querySelectorAll(".slide-image");
const slideButtons = document.querySelector(".slide-show-buttons");
const btnCircles = document.querySelectorAll(".btn-circle");
let num = 1;

const resetCounter = function () {
  return 0;
};

const removeBtnActiveClass = function (bc) {
  bc.classList.remove("btn-active");
};

const addBtnActiveClass = function (bc) {
  bc.classList.add("btn-active");
};

const removeHiddenClass = function (sImg) {
  sImg.classList.remove("hidden");
};

const addHiddenClass = function (sImg) {
  sImg.classList.add("hidden");
};

const handleSlideButton = function (e) {
  const btnEl = e.target.closest(".btn-circle");
  if (!btnEl) return;
  btnCircles.forEach((bc) => removeBtnActiveClass(bc));
  addBtnActiveClass(btnEl);
  slideImage.forEach((sImg) => {
    if (sImg.dataset.value === btnEl.value) {
      removeHiddenClass(sImg);
      num = Number(sImg.dataset.value) - 1;
    } else {
      addHiddenClass(sImg);
    }
  });
};

const autoSlideImage = function () {
  slideImage.forEach((si) => addHiddenClass(si));
  removeHiddenClass(slideImage[num]);
  btnCircles.forEach((bc) => {
    if (bc.value === String(num + 1)) addBtnActiveClass(bc);
    if (bc.value !== String(num + 1)) removeBtnActiveClass(bc);
  });
  num++;
  if (num === slideImage.length) {
    num = resetCounter();
  }
};
setInterval(autoSlideImage, 5000);

slideButtons.addEventListener("click", handleSlideButton);
