const donnee = await fetch(
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22"
);
const data = await donnee.json();


const totalCount = data.total_count;
const totalCountElement = document.createElement("h2");
totalCountElement.innerHTML = totalCount;
const sectionFiches = document.querySelector( ".fiches");
sectionFiches.appendChild(totalCountElement);
console.log(data)

// Fonction qui génère toute la page web
//function genererEvenement(evenements) {
  for (let i = 0; i < data.results.length; i++) {
    const evenementsElement = document.createElement("article");
    sectionFiches.appendChild(evenementsElement);

    const imageEvenement = document.createElement("img")
    imageEvenement.src = data.results[i].originalimage;
    evenementsElement.appendChild(imageEvenement);
    console.log("image", data.results[i].originalimage);

    const titreEvenement = document.createElement("h2")
    titreEvenement.innerText = data.results[i].title_fr;
    evenementsElement.appendChild(titreEvenement);

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = data.results[i].description_fr;
    evenementsElement.appendChild(descriptionElement);
  

    const dateHeure = document.createElement("p");
    dateHeure.innerText = data.results[i].daterange_fr;
    evenementsElement.appendChild(dateHeure);

    const addresse = document.createElement("p");
    addresse.innerText = data.results[i].ocation_address;
    evenementsElement.appendChild(addresse);

    const region = document.createElement("p");
    region.innerHTML = data.results[i].location_region;
    evenementsElement.appendChild(region);

    const motCle = document.createElement("p");
    motCle.innerHTML = data.results[i].keywords_fr;
    evenementsElement.appendChild(motCle);

  }
//}

// Premier affichage de la page
/*genererEvenement(evenements);

// Ajout du listener pour trier les pièces par ordre de prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
  const evenementsOrdonnees = Array.from(evenements);
  evenementsOrdonnees.sort(function (a, b) {
    return b.prix - a.prix;
  });
  // Effacement de l'écran et regénération de la page
  document.querySelector(".fiches").innerHTML = "";
  genererEvenement(evenementsOrdonnees);
});

// Ajout du listener pour filtrer les pièces non abordables
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
  const evenementsFiltrees = evenements.filter(function (piece) {
    return piece.disponibilite;
  });
  // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  document.querySelector(".fiches").innerHTML = "";
  genererevenements(evenementsFiltrees);
});*/


let inputEcriture = document.getElementById("inputEcriture")
console.log(inputEcriture)

