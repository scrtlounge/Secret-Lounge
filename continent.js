document.addEventListener("DOMContentLoaded", () => {

  if (localStorage.getItem("ageVerified") !== "true") {
    window.location.href = "verificationAge.html";
    return;
  }

  document.querySelectorAll(".continent-btn").forEach(btn => {

    btn.addEventListener("click", () => {

      localStorage.setItem(
        "userContinent",
        btn.dataset.continent
      );

      window.location.href = "country.html";

    });

  });

});