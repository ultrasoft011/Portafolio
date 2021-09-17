const myArray = ["A", "B", "C"];
const first = document.querySelector(".example");
console.log(first);

setTimeout(function () {
  first.innerHTML = "I'm Felipe";
  console.log("Something change with setTimeOut");
  setTimeout(function () {
    first.innerHTML = "A Front-end Developer";
  }, 5000);
}, 5000);
