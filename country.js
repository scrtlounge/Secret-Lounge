document.addEventListener("DOMContentLoaded", async () => {

    const continent = localStorage.getItem("userContinent");

    if (!continent) {
        window.location.href = "continent.html";
        return;
    }

    const subtitle = document.getElementById("subtitle");
    const countryList = document.getElementById("countryList");

    try {

        const response = await fetch("Countries.json");
        const data = await response.json();

        const countries = data.continents[continent].countries;

        subtitle.textContent = "Choisissez votre pays";

        for (const key in countries) {

            const country = countries[key];

            const button = document.createElement("button");

            button.className = "country-btn";

            button.innerHTML = `
                <strong>${country.name}</strong><br>
                <small>${country.language}</small><br>
                <small>${country.currency}</small>
            `;

            button.addEventListener("click", () => {

                localStorage.setItem("userCountry", key);

                window.location.href = "region.html";

            });

            countryList.appendChild(button);

        }

    } catch (e) {

        subtitle.textContent = "Impossible de charger les pays.";

        console.error(e);

    }

});