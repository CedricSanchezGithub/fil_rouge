// alert("hello, world")

const good = document.getElementById("goodAnswer");
const bad = document.getElementById("badAnswer");
const imgBagueton = document.getElementById("imgBagueton");
const inputRef = document.getElementById("ref");
// Fonction permetant d'afficher bonne réponse selon le booléen

function getValue() {
  const input = document.getElementById("ref").value;
  if (input == "marmiton") {
    console.log("bonne réponse");
    good.style.opacity = "1";
    bad.style.opacity = "0";
    inputRef.style.background = "#6cba6c";
  } else {
    console.log("mauvaise réponse");
    bad.style.opacity = "1";
    good.style.opacity = "0";
    inputRef.style.background = "#e98888";
  }
  console.log(input);
  event.preventDefault(); // A changer car déprécié
}

imgBagueton.addEventListener("mouseover", function () {
  imgBagueton.style.opacity = "1";
  event.preventDefault();
  console.log("mouse over!");
});
