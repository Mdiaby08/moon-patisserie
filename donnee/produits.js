/*
  ============================================================
  C'EST ICI QUE TU CHANGES LES PRIX ET LES QUANTITÉS
  ============================================================
  - prix  : en euros, avec un point (ex : 2.5 pour 2,50 €)
  - stock : nombre disponible. Mets 0 pour afficher "Épuisé".
  - Pour ajouter un produit : copie une ligne { ... }, sépare-les par une virgule.
  - Pour ajouter une catégorie : copie un bloc entier (cookies: { ... }).
    La clé (ex : "cookies") sert dans l'adresse : categorie.html?cat=cookies
  Après chaque modification : enregistre, puis recharge la page (F5).
*/

const CATEGORIES = {
    cookies: {
        titre: "Cookies",
        description: "Croustillants dehors, moelleux dedans.",
        produits: [
            { nom: "Cookie au chocolat", description: "Pépites de chocolat noir.", prix: 1.0, stock: 12 },
            { nom: "Cookie caramel", description: "Cœur coulant au caramel.", prix: 1.5, stock: 6 }
        ]
    },
    boissons: {
        titre: "Boissons",
        description: "Pour accompagner votre pâtisserie.",
        produits: [
            { nom: "Cannette 33 cl", description: "Boisson fraîche au choix.", prix: 1.0, stock: 20 }
        ]
    },
    gateaux: {
        titre: "Gâteaux",
        description: "Pour une personne ou à partager.",
        produits: [
            { nom: "Charlotte aux fraises", description: "Biscuit cuillère, crème légère et fraises.", prix: 3.0, stock: 4 }
        ]
    },
    tiramisu: {
        titre: "Tiramisus",
        description: "Faits maison, préparés à la commande.",
        produits: [
            { nom: "Tiramisu classique", description: "Café, mascarpone et cacao.", prix: 3.5, stock: 8 }
        ]
    }
};
