const input = document.getElementById("texte");
const resultat = document.getElementById("resultat");

input.addEventListener("input", function() {
  let texte = input.value;
  let nouveauTexte = "";

  for (let lettre of texte) {
    let code = lettre.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      nouveauTexte += String.fromCharCode((code - 65 - 3 + 26) % 26 + 65);
    }
    else if (code >= 97 && code <= 122) {
      nouveauTexte += String.fromCharCode((code - 97 - 3 + 26) % 26 + 97);
    }
    else {
      nouveauTexte += lettre;
    }
  }

  resultat.textContent = nouveauTexte;
});
