document.addEventListener("DOMContentLoaded", () => {
  // Sélection de tous les boutons de la liste des régions
  const buttons = document.querySelectorAll(".region-list button");
  const loading = document.getElementById("loading");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Récupération de la région choisie
      const region = button.getAttribute("data-region");

      // Sauvegarde de la région dans localStorage
      localStorage.setItem("userRegion", region);

      // Masquer les boutons pour éviter un double clic
      document.querySelector(".region-list").style.display = "none";

      // Afficher le message de chargement
      loading.style.display = "block";

      // Redirection vers la page principale après un petit délai (1,5s)
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    });
  });
});