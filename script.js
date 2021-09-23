const first = document.querySelector(".example");
const project = document.querySelector(".header--project");
const work = document.querySelector(".header--work");
const about = document.querySelector(".header--about");
const workButton = document.querySelector(".header--work");
const leftWorkCard = document.querySelector(".work__leftcard");
const rightWorkCard = document.querySelector(".work__rightcard");
const leftWorkCard2 = document.querySelector(".work__leftcard2");
const rightWorkCard2 = document.querySelector(".work__rightcard2");

workButton.addEventListener("click", function () {
  setTimeout(function () {
    leftWorkCard.style.display = "block";
  }, 1500);
  setTimeout(function () {
    rightWorkCard.style.display = "block";
  }, 2500);
  setTimeout(function () {
    leftWorkCard2.style.display = "block";
  }, 3500);
  setTimeout(function () {
    rightWorkCard2.style.display = "block";
  }, 4500);
});

setTimeout(function () {
  first.innerHTML = "I'm Felipe";
  setTimeout(function () {
    first.innerHTML = "Front-end Developer";
  }, 1000);
  setTimeout(function () {
    first.style.display = "none";
  }, 1000);
  setTimeout(function () {
    work.style.display = "block";
  }, 1100);
  setTimeout(function () {
    project.style.display = "block";
  }, 1250);
  setTimeout(function () {
    about.style.display = "block";
  }, 1350);
}, 1000);
