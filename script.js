const profiles = [
  { name: "Cathy", age: 23, price: "8 000 FCFA", desc: "Élégante et discrète.", img: "Keli.jpg" },
  { name: "Chloé", age: 25, price: "10 000 FCFA", desc: "Douce présence, respect absolu.", img: "Chloé.jpg" },
  { name: "Jessica", age: 26, price: "12 000 FCFA", desc: "Charme naturel, esprit calme.", img: "Jessica.jpg" },
  { name: "Lysette", age: 24, price: "8 000 FCFA", desc: "Allure raffinée, attitude posée.", img: "Lysette.jpg" },
  { name: "Merveille", age: 22, price: "9 000 FCFA", desc: "Présence lumineuse, discrétion assurée.", img: "Merveille.jpg" },
  { name: "Solange", age: 23, price: "8 000 FCFA", desc: "Élégance mature, échanges respectueux.", img: "Solange.jpg" },
  { name: "Marta", age: 25, price: "8 000 FCFA", desc: "Style sobre, charme discret.", img: "Marta.jpg" },
  { name: "Nina", age: 23, price: "10 000 FCFA", desc: "Féminité subtile, douceur naturelle.", img: "Nina.jpg" },
  { name: "Orphée", age: 24, price: "8 000 FCFA", desc: "Mystérieuse et calme.", img: "Orphée.jpg" },
  { name: "Marie", age: 26, price: "9 000 FCFA", desc: "Simplicité chic, élégance naturelle.", img: "Marie.jpg" },
  { name: "Lili", age: 22, price: "9 000 FCFA", desc: "Douce et souriante.", img: "Lili.jpg" },
  { name: "Léa", age: 24, price: "12 000 FCFA", desc: "Présence délicate, esprit ouvert.", img: "Léa.jpg" },
  { name: "Andrea", age: 25, price: "7 000 FCFA", desc: "Allure moderne, discrétion garantie.", img: "Andrea.jpg" },
  { name: "Béatrice", age: 28, price: "9 000 FCFA", desc: "Élégance classique, calme assuré.", img: "Béatrice.jpg" },
  { name: "Divine", age: 21, price: "8 000 FCFA", desc: "Présence chaleureuse, respect avant tout.", img: "Divine.jpg" },
  { name: "Julie", age: 24, price: "7 000 FCFA", desc: "Charme simple, moments choisis.", img: "Julie.jpg" },
  { name: "Camille", age: 20, price: "10 000 FCFA", desc: "Brute, audacieuse, respectueuse.", img: "Camille.jpg" },
  { name: "Amelie", age: 23, price: "8 000 FCFA", desc: "Élégante et discrète.", img: "Amelie.jpg" },
  { name: "Claire", age: 25, price: "7 000 FCFA", desc: "Douce présence, respect absolu.", img: "Claire.jpg" },
  { name: "Ines", age: 26, price: "9 000 FCFA", desc: "Charme naturel, esprit calme.", img: "Ines.jpg" },
  { name: "Margo", age: 24, price: "8 000 FCFA", desc: "Allure raffinée, attitude posée.", img: "Margo.jpg" },
  { name: "Eline", age: 22, price: "10 000 FCFA", desc: "Présence lumineuse, discrétion assurée.", img: Eline.jpg" },
  { name: "Soleil", age: 27, price: "8 000 FCFA", desc: "Élégance mature, échanges respectueux.", img: "Soleil.jpg" },
  { name: "Pauline", age: 25, price: "7 000 FCFA", desc: "Style sobre, charme discret.", img: "Pauline.jpg" },
  { name: "Melodie", age: 23, price: "8 000 FCFA", desc: "Féminité subtile, douceur naturelle.", img: "Melodie.jpg" },
  { name: "Ingrid", age: 24, price: "7 000 FCFA", desc: "Mystérieuse et calme.", img: "Ingrid.jpg" },
  { name: "Jade", age: 20, price: "8 000 FCFA", desc: "Simplicité chic, élégance naturelle.", img: "Jade.jpg" },
  { name: "Clemence", age: 22, price: "9 000 FCFA", desc: "Douce et souriante.", img: "Clemence.jpg" },
  { name: "Mia", age: 24, price: "8 000 FCFA", desc: "Présence délicate, esprit ouvert.", img: "Mia.jpg" },
  { name: "Ambre", age: 25, price: "7 000 FCFA", desc: "Allure moderne, discrétion garantie.", img: "Ambre.jpg" },
  { name: "Oceane", age: 19, price: "8 000 FCFA", desc: "Élégance classique, calme assuré.", img: "Oceane.jpg" },
  { name: "Monique", age: 23, price: "9 000 FCFA", desc: "Présence chaleureuse, respect avant tout.", img: "Monique.jpg" },
  { name: "Rose", age: 24, price: "7 000 FCFA", desc: "Charme simple, moments choisis.", img: "Rose.jpg" },
  { name: "Emma", age: 21, price: "7 000 FCFA", desc: "Émotive, sensible, libertine.", img: "Emma.jpg" },
  { name: "Jeanne", age: 22, price: "8 000 FCFA", desc: "Douce et souriante.", img: "Jeanne.jpg" },
  { name: "Eva", age: 24, price: "8 000 FCFA", desc: "Présence délicate, esprit ouvert.", img: "Eva.jpg" },
  { name: "Sara", age: 25, price: "9 000 FCFA", desc: "Allure moderne, discrétion garantie.", img: "Sara.jpg" },
  { name: "Soradyne", age: 19, price: "10 000 FCFA", desc: "Élégance classique, calme assuré.", img: "Soradyne.jpg" },
  { name: "Stela", age: 23, price: "8 000 FCFA", desc: "Présence chaleureuse, respect avant tout.", img: "Stela.jpg" },
  { name: "Justine", age: 24, price: "10 000 FCFA", desc: "Charme simple, moments choisis.", img: "Justine.jpg" }
];

const container = document.getElementById("profiles");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

profiles.forEach(profile => {
  const card = document.createElement("div");
  card.className = "card";

  // Message personnalisé WhatsApp
  const message = `Bonjour, je suis intéressé par ${profile.name} (${profile.age} ans – ${profile.price}).`;
  const whatsappLink = `https://wa.me/237659183197?text=${encodeURIComponent(message)}`;

  card.innerHTML = `
    <img src="${profile.img}" alt="${profile.name}" class="profile-img">
    <h3>${profile.name}, ${profile.age} ans</h3>
    <p>${profile.desc}</p>
    <div class="price">${profile.price}</div>
    <a class="reserve-btn" href="${whatsappLink}" target="_blank">
      Réserver
    </a>
  `;

  // Agrandir l'image au clic
  const img = card.querySelector(".profile-img");
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = profile.img;
  });

  container.appendChild(card);
});

// Fermer le modal en cliquant dessus
modal.addEventListener("click", () => {
  modal.style.display = "none";
  modalImg.src = "";
});