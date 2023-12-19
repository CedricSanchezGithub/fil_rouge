// alert("hello, world")

const good = document.getElementById("goodAnswer");
const bad = document.getElementById("badAnswer");
const imgBagueton = document.getElementById('imgBagueton');
// Fonction permetant d'afficher bonne réponse selon le booléen

function getValue() {
  const input = document.getElementById("ref").value;
  if (input == "marmiton") {
    console.log("bonne réponse");
    good.style.opacity = "1";
    bad.style.opacity = "0";

  } else {
    console.log("mauvaise réponse");
    bad.style.opacity = "1";
    good.style.opacity = "0";
  }
  console.log(input);
  event.preventDefault() // A changer car déprécié
  ;
}

imgBagueton.addEventListener('mouseover', function() {
  imgBagueton.style.opacity = "1";
  console.log("mouse over!");
});