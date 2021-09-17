const first = document.querySelector(".example");
const profile = document.querySelector(".header--profile");
const work = document.querySelector(".header--work");
const about = document.querySelector(".header--about");

console.log(first);

setTimeout(function () {
  first.innerHTML = "I'm Felipe";
  setTimeout(function () {
    first.innerHTML = "A Front-end Developer";
  }, 5000);
  setTimeout(function () {
    first.style.visibility = "hidden";
  }, 10000);
  setTimeout(function () {
    profile.style.display = "block";
  }, 11000);
  setTimeout(function () {
    work.style.display = "block";
  }, 13000);
  setTimeout(function () {
    about.style.display = "block";
  }, 15000);
}, 5000);
