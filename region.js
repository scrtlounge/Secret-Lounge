document.addEventListener("DOMContentLoaded", async () => {

    const countryId = localStorage.getItem("userCountry");
    const file = localStorage.getItem("countryFile");

    if (!countryId || !file) {
        window.location.href = "country.html";
        return;
    }

    const regionList = document.getElementById("regionList");
    const countryName = document.getElementById("countryName");
    const loading = document.getElementById("loading");

    loading.style.display = "block";

    try {

        const response = await fetch(file);
        const data = await response.json();

        const country = data.countries.find(c => c.id === countryId);

        if (!country) {
            loading.innerHTML = "Pays introuvable.";
            return;
        }

        countryName.innerHTML = `🌍 ${country.flag} ${country.name}`;

        loading.style.display = "none";

        country.regions.forEach(region => {

            const button = document.createElement("button");

            button.innerHTML = `
                ${region.name}
                <span>${region.city}</span>
            `;

            button.onclick = () => {

                localStorage.setItem("userRegion", region.id);

                window.location.href = "index.html";

            };

            regionList.appendChild(button);

        });

    } catch (error) {

        console.error(error);

        loading.innerHTML = "Erreur de chargement.";

    }

});