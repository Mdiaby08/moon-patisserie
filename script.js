/* Construit les pages à partir de donnees/produits.js. Pas besoin de modifier ce fichier. */

const EMAIL = "contact@moonpatisserie.fr";

function formaterPrix(prix) {
    return prix.toFixed(2).replace(".", ",") + " €";
}

function creer(balise, classe, texte) {
    const el = document.createElement(balise);
    if (classe) el.className = classe;
    if (texte !== undefined) el.textContent = texte;
    return el;
}

/* ---------- Accueil : une carte cliquable par catégorie ---------- */
function afficherCategories() {
    const zone = document.getElementById("categories");
    if (!zone) return;

    for (const cle in CATEGORIES) {
        const cat = CATEGORIES[cle];
        const lien = creer("a", "carte carte-lien");
        lien.href = "categorie.html?cat=" + encodeURIComponent(cle);

        lien.appendChild(creer("h3", "", cat.titre));
        lien.appendChild(creer("p", "", cat.description));
        lien.appendChild(creer("p", "voir", "Voir les produits"));
        zone.appendChild(lien);
    }
}

/* ---------- Page catégorie : les produits, leur prix et leur stock ---------- */
function afficherProduits() {
    const zone = document.getElementById("produits");
    if (!zone) return;

    const cle = new URLSearchParams(window.location.search).get("cat");
    const cat = CATEGORIES[cle];

    if (!cat) {
        document.getElementById("titre-categorie").textContent = "Catégorie introuvable";
        return;
    }

    document.title = "Moon Pâtisserie – " + cat.titre;
    document.getElementById("titre-categorie").textContent = cat.titre;
    document.getElementById("description-categorie").textContent = cat.description;

    for (const produit of cat.produits) {
        const carte = creer("article", "carte");
        carte.appendChild(creer("h3", "", produit.nom));
        carte.appendChild(creer("p", "", produit.description));
        carte.appendChild(creer("p", "prix", formaterPrix(produit.prix)));

        if (produit.stock <= 0) {
            carte.appendChild(creer("p", "stock epuise", "Épuisé"));
        } else {
            const texte = produit.stock <= 3
                ? "Plus que " + produit.stock + " disponible" + (produit.stock > 1 ? "s" : "")
                : produit.stock + " disponibles";
            carte.appendChild(creer("p", "stock", texte));

            const bouton = creer("a", "bouton", "Commander");
            bouton.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Commande : " + produit.nom);
            carte.appendChild(bouton);
        }
        zone.appendChild(carte);
    }
}

afficherCategories();
afficherProduits();
