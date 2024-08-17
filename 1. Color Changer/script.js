const buttons = document.querySelectorAll("#buttons");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);

    if (e.target.className === "red") {
      body.style.backgroundColor = "red";
    }
    if (e.target.className === "white") {
      body.style.backgroundColor = "white";
      body.style.color = "#000";
    }
    if (e.target.className === "black") {
      body.style.backgroundColor = "black";
      body.style.color = "#fff";
    }
    if (e.target.className === "blue") {
      body.style.backgroundColor = "blue";
    }
  });
});
