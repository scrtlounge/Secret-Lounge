document.addEventListener("DOMContentLoaded", ()=>{

const continent=localStorage.getItem("userContinent");

if(!continent){

window.location.href="continent.html";

return;

}

const subtitle=document.getElementById("subtitle");

const list=document.getElementById("countryList");

const countries={

africa:[
"🇨🇲 Cameroun",
"🇸🇳 Sénégal",
"🇨🇮 Côte d'Ivoire",
"🇬🇦 Gabon",
"🇳🇬 Nigeria"
],

asia:[
"🇹🇭 Thaïlande",
"🇵🇭 Philippines",
"🇮🇩 Indonésie"
],

europe:[
"🇫🇷 France",
"🇩🇪 Allemagne",
"🇪🇸 Espagne"
],

america:[
"🇺🇸 États-Unis",
"🇨🇦 Canada",
"🇧🇷 Brésil"
]

};

subtitle.innerHTML="Sélectionnez votre pays.";

countries[continent].forEach(country=>{

const btn=document.createElement("button");

btn.className="country-btn";

btn.innerHTML=country;

btn.onclick=()=>{

localStorage.setItem("userCountry",country);

window.location.href="region.html";

};

list.appendChild(btn);

});

});