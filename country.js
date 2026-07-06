document.addEventListener("DOMContentLoaded", async () => {

    const continent = localStorage.getItem("userContinent");

    if (!continent) {
        window.location.href = "continent.html";
        return;
    }

    const title = document.getElementById("subtitle");
    const countryList = document.getElementById("countryList");

    let file = "";

    switch (continent) {
        case "africa":
            file = "africa.json";
            break;

        case "asia":
            file = "asia.json";
            break;

        case "europe":
            file = "europe.json";
            break;

        case "americas":
            file = "americas.json";
            break;

        default:
            title.innerHTML = "Continent inconnu";
            return;
    }

    try {

        const response = await fetch(file);
        const data = await response.json();

        title.innerHTML = "Choisissez votre pays";

        data.countries.forEach(country => {

            const button = document.createElement("button");

            button.className = "country-btn";

            button.innerHTML = `
                <h3>${country.flag} ${country.name}</h3>
                <p>🗣️ ${country.language.join(", ")}</p>
                <p>💰 ${country.currency}</p>
                <p>💳 Inscription : ${country.registrationPrice} ${country.currencySymbol}</p>
            `;

            button.addEventListener("click", () => {

                localStorage.setItem("userCountry", country.id);

 localStorage.setItem("countryFile", file);
               window.location.href = "region.html";

            });

            countryList.appendChild(button);

        });

    } catch (error) {

        console.error(error);

        title.innerHTML = "Impossible de charger les pays.";

    }

});