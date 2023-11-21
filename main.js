// Récupération des pièces depuis le fichier JSON
const pieces = await fetch("donnee.json").then((pieces) => pieces.json());

// Fonction qui génère toute la page web
function genererPieces(pieces) {
  for (let i = 0; i < pieces.length; i++) {
    const article = pieces[i];
    const sectionFiches = document.querySelector(".fiches");
    const piecesElement = document.createElement("article");

    const imageElement = document.createElement("img");
    imageElement.src = article.image;

    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} €`;

    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "pas de categorie";

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText =
      article.description ?? "pas de description pour le moment";

    const disponibiliteElement = document.createElement("p");
    disponibiliteElement.innerText = article.disponibilite
      ? "En stock"
      : "Rupture de stock";

    sectionFiches.appendChild(piecesElement);

    piecesElement.appendChild(imageElement);
    piecesElement.appendChild(nomElement);
    piecesElement.appendChild(prixElement);
    piecesElement.appendChild(categorieElement);

    piecesElement.appendChild(descriptionElement);
    piecesElement.appendChild(disponibiliteElement);
  }
}

// Premier affichage de la page
genererPieces(pieces);

// Ajout du listener pour trier les pièces par ordre de prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
  const piecesOrdonnees = Array.from(pieces);
  piecesOrdonnees.sort(function (a, b) {
    return b.prix - a.prix;
  });
  // Effacement de l'écran et regénération de la page
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesOrdonnees);
});

// Ajout du listener pour filtrer les pièces non abordables
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.disponibilite;
  });
  // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});
