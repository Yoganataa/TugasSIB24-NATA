// faq js
const btns = document.querySelectorAll(".acc-btn");
function accordion() {
  this.classList.toggle("is-open");
  const content = this.nextElementSibling;
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}
btns.forEach((el) => el.addEventListener("click", accordion));

// scrl1
function scrollToCarousel() {
  const carouselElement = document.getElementById("carousel");
  carouselElement.scrollIntoView({ behavior: "smooth" });
}

//scrl2
function scrollToFitur() {
  const carouselElement = document.getElementById("fitur");
  carouselElement.scrollIntoView({ behavior: "smooth" });
}

//scrl3
function scrollToFAQ() {
  const carouselElement = document.getElementById("faq");
  carouselElement.scrollIntoView({ behavior: "smooth" });
}

//icon
$(document).ready(function () {
  $("#toggle-btn").click(function () {
    $("#toggle-icon").toggleClass("bi-chevron-down bi-chevron-up");
    $("#item").toggleClass("open");
  });
});
