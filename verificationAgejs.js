document.addEventListener("DOMContentLoaded", () => {

  const enterBtn = document.getElementById("enterBtn");
  const ageInput = document.getElementById("age");
  const error = document.getElementById("error");

  // Si déjà validé → direction région
  if (localStorage.getItem("ageVerified") === "true") {
    window.location.href = "region.html";
    return;
  }

  enterBtn.addEventListener("click", () => {

    const age = parseInt(ageInput.value, 10);

    // Vérification correcte
    if (isNaN(age) || age < 0) {
      error.innerText = "Veuillez entrer un âge valide";
      return;
    }

    if (age >= 18) {
      localStorage.setItem("ageVerified", "true");
      window.location.href = "region.html";
    } else {
      error.innerText = "Accès refusé : vous devez avoir 18 ans ou plus";
    }
  });

});