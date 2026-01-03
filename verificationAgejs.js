// Écoute le chargement complet du DOM
document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const ageInput = document.getElementById("age");
  const error = document.getElementById("error");

  // Si l'âge a déjà été validé → redirection directe vers la sélection de région
  if (localStorage.getItem("ageVerified") === "true") {
    window.location.href = "region.html";
    return; // On stoppe le reste du script
  }

  // Gestion du clic sur le bouton "Entrer"
  enterBtn.addEventListener("click", () => {
    const age = parseInt(ageInput.value, 10);

    // Vérification que l'âge est un nombre valide
    if (!age || age < 0) {
      error.innerText = "Veuillez entrer un âge valide";
      return;
    }

    // Si l'utilisateur a 18 ans ou plus
    if (age >= 18) {
      // On sauvegarde la validation dans localStorage
      localStorage.setItem("ageVerified", "true");

      // Redirection vers la page de sélection de régio
      window.location.href = "region.html";
    } else {
      // Sinon message d'erreur
      error.innerText = "Accès refusé : vous devez avoir 18 ans ou plus";
    }
  });
});