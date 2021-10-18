const db = require("../../data.json");

function buttonOpen() {
  const button = document.getElementById("test");
  button.classList.toggle("active");
}

function buttonClose() {
  const button = document.getElementById("test");
  button.className.toggle("hidden");
}
