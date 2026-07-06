 document.addEventListener("DOMContentLoaded", async () => {

    const countryId = localStorage.getItem("userCountry");
    const regionId = localStorage.getItem("userRegion");
    const file = localStorage.getItem("countryFile");

    if (!countryId || !regionId || !file) {
        window.location.href = "continent.html";
        return;
    }

    const container = document.getElementById("profiles");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    try {

        const response = await fetch(file);
        const data = await response.json();

        const country = data.countries.find(c => c.id === countryId);

        const region = country.regions.find(r => r.id === regionId);

        container.innerHTML = "";

        region.profiles.forEach(profile => {

            const card = document.createElement("div");

            card.className = "card";

            let statusColor = profile.status === "available"
                ? "#25d366"
                : "#ff9800";

            const whatsappMessage = `Bonjour,

🌍 Pays : ${country.name}
📍 Région : ${region.name}

👩 Profil : ${profile.name}
💰 30 min : ${profile.prices["30min"]} ${country.currency}
💰 1 Heure : ${profile.prices["1h"]} ${country.currency}
💰 Nuit : ${profile.prices["night"]} ${country.currency}
💰 Journée : ${profile.prices["day"]} ${country.currency}`;

            const whatsapp = `https://wa.me/${country.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

            card.innerHTML = `
                <img src="${profile.image}" alt="${profile.name}">

                <h3>${profile.name}, ${profile.age} ans</h3>

                <p>${profile.description}</p>

                <p style="color:${statusColor};font-weight:bold;">
                    ${profile.statusText}
                </p>

                <div class="price">

                    30 min : ${profile.prices["30min"]} ${country.currency}<br>

                    1 Heure : ${profile.prices["1h"]} ${country.currency}<br>

                    Nuit : ${profile.prices["night"]} ${country.currency}<br>

                    Journée : ${profile.prices["day"]} ${country.currency}

                </div>

                <a class="reserve-btn"
                   href="${whatsapp}"
                   target="_blank">
                   Réserver
                </a>
            `;

            card.querySelector("img").onclick = () => {

                modal.style.display = "flex";

                modalImg.src = profile.image;

            };

            container.appendChild(card);

        });

        modal.onclick = () => {

            modal.style.display = "none";

            modalImg.src = "";

        };

    } catch (e) {

        console.error(e);

        container.innerHTML = "<h2>Erreur de chargement des profils.</h2>";

    }

});