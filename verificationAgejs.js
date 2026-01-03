function checkAge() {
  const ageInput = document.getElementById("age").value;
  const error = document.getElementById("error");

  if (!ageInput) {
    error.textContent = "Veuillez entrer votre âge.";
    return;
  }

  if (ageInput >= 18) {
    localStorage.setItem("ageVerified", "true");
    window.location.href = "index.html"; // page principale du site
  } else {
    error.textContent = "Accès refusé. Vous devez avoir au moins 18 ans.";
  }
}

// Si déjà vérifié → accès direct
if (localStorage.getItem("ageVerified") === "true") {
  window.location.href = "region.html";
}

