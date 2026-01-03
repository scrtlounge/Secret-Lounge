document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".region-list button");
  const loading = document.getElementById("loading");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const region = button.getAttribute("data-region");

      // Sauvegarde de la région
      localStorage.setItem("userRegion", region);

      // Masquer les boutons
      document.querySelector(".region-list").style.display = "none";

      // Afficher le chargement
      loading.style.display = "block";

      // Redirection
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2500);
    });
  });
});

