const first = document.querySelector(".example");
const work = document.querySelector(".header--work");
const project = document.querySelector(".header--project");
const about = document.querySelector(".header--about");
const workButton = document.querySelector(".header--work");
const leftWorkCard = document.querySelector(".work__leftcard");
const rightWorkCard = document.querySelector(".work__rightcard");
const leftWorkCard2 = document.querySelector(".work__leftcard2");
const rightWorkCard2 = document.querySelector(".work__rightcard2");
const blackBoxWork = document.getElementById("header-button_work");
const blackBoxProject = document.getElementById("header-button_project");
const blackBoxAbout = document.getElementById("header-button_about");
const buttonWork = document.querySelector(".button-work");
const buttonProject = document.querySelector(".button-project");
const buttonAbout = document.querySelector(".button-about");

workButton.addEventListener("click", function () {
  console.log("pressed");
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
  }, 5000);
  setTimeout(function () {
    first.style.display = "none";
  }, 1000);
  setTimeout(function () {
    work.style.display = "block";
    // buttonWork.style.display = "block";
  }, 1100);
  setTimeout(function () {
    project.style.display = "block";
    // buttonProject.style.display = "block";
  }, 1250);
  setTimeout(function () {
    about.style.display = "block";
    // buttonAbout.style.display = "block";
  }, 1350);
}, 5000);
