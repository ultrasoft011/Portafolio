const first = document.querySelector(".example");
const project = document.querySelector(".header--project");
const work = document.querySelector(".header--work");
const about = document.querySelector(".header--about");

console.log(first);

setTimeout(function () {
  first.innerHTML = "I'm Felipe";
  setTimeout(function () {
    first.innerHTML = "Front-end Developer";
  }, 5000);
  setTimeout(function () {
    first.style.display = "none";
  }, 10000);
  setTimeout(function () {
    work.style.display = "block";
  }, 11000);
  setTimeout(function () {
    project.style.display = "block";
  }, 13000);
  setTimeout(function () {
    about.style.display = "block";
  }, 15000);
}, 5000);
