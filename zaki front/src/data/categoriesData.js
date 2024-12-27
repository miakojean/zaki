export const categoriesData = {
    'céréales': {
        name: 'céréales',
        image: new URL('@/assets/categories/cereals.webp', import.meta.url).href,
        description: 'Riz, maïs, mil, sorgho, etc.',
        items: [ 'Riz', 'Maïs', 'Mil', 'Sorgho', 'Blé', 'Avoine', 'Orge', 'Fonio']
    },
    'fruits': {
        name: 'Fruits',
        image: new URL('@/assets/categories/fruits.webp', import.meta.url).href,
        description: 'Mangue, orange, ananas, etc.',
        items: ['Mangue', 'Orange', 'Ananas', 'Papaye', 'Banane douce', 'Goyave', 'Pomme', 'Poire']
    },
    'légumes': {
        name: 'Légumes',
        image: new URL('@/assets/categories/legumes.webp', import.meta.url).href,
        description: 'Tomates, oignons, aubergines, etc.',
        items: ['Laitue', 'Épinards', 'Carotte','Tomates','Aubergines','Courgettes','Concombres',
        'Piments', 'Poivrons (vert, rouge, jaune)','Oignons', 'Ail', 'Échalotes',
        'Gombo', 'Chou-fleur', 'Chou rouge', 'Okra', 'Brocoli']
    },
    'tubercules': {
        name: 'Tubercules',
        image: new URL('@/assets/categories/tubercules.png', import.meta.url).href,
        description: 'Pommes de terre, patates douces, etc.',
        items: ['Pomme de terre', 'Patate douce', 'Manioc', 'Carotte', 'Navet', 'Betterave', 'Topinambour', 'Oignon nouveau']
    },
    'légumineuses': {
        name: 'Légumineuses',
        image: new URL('@/assets/categories/legumineuses.webp', import.meta.url).href,
        description: 'Lentilles, haricots, pois chiches, etc.',
        items: ['Lentilles', 'Haricots blancs', 'Haricots rouges', 'Pois chiches', 'Fèves', 'Pois cassés', 'Lupins', 'Soja']
    },
    'produitsdelamer': {
        name: 'Produits de la mer',
        image: new URL('@/assets/categories/produits_de_la_mer.webp', import.meta.url).href,
        description: 'Poissons, crustacés, mollusques, etc.',
        items: ['Saumon', 'Thon', 'Maquereau', 'Cabillaud', 'Crevettes', 'Homard', 'Moules', 'Huîtres', 'Calmar', 'Seiche']
    },
    'produitslaitiers': {
        name: 'Produits laitiers',
        image: new URL('@/assets/categories/produits_laitiers.webp', import.meta.url).href,
        description: 'Lait, yaourts, fromages, etc.',
        items: ['Lait entier', 'Lait demi-écrémé', 'Lait écrémé', 'Yaourt nature', 'Yaourt aux fruits', 'Fromage blanc', 'Fromage frais', 'Fromage à pâte dure', 'Fromage à pâte molle', 'Beurre']
    },
    'viandes': {
        name: 'Viandes',
        image: new URL('@/assets/categories/viandes.webp', import.meta.url).href,
        description: 'Bœuf, poulet, porc, etc.',
        items: ['Bœuf','Poulet','Porc','Agneau','Dinde','Canard','Lapin','Chèvre','Côte de bœuf','Saucisse']
    },
    'epicesetcondiments': {
        name: 'Épices et Condiments',
        image: new URL('@/assets/categories/epices_et_condiments.webp', import.meta.url).href,
        description: 'Poivre, sel, gingembre, etc.',
        items: ['Poivre noir','Sel','Gingembre','Curcuma','Paprika','Cannelle','Clou de girofle','Noix de muscade','Cumin','Piment','Anis étoilé','Cardamome','Coriandre en poudre','Moutarde']
    },
    'huilesetgraisses': {
        name: 'Huiles et Graisses',
        image: new URL('@/assets/categories/huiles_et_graisses.webp', import.meta.url).href,
        description: 'Huile de palme, beurre de karité, etc.',
        items: ['Huile de palme', "Huile d'arachide",'Huile de tournesol',"Huile d'olive",'Beurre de karité','Margarine',
        'Beurre', 'Graisse de coco','Graisse animale', 'Huile de soja']
    },
    'fleursetplantesaromatiques': {
        name: 'Fleurs et Plantes aromatiques',
        image: new URL('@/assets/categories/fleurs_et_plantes_aromatiques.webp', import.meta.url).href,
        description: 'Basilic, menthe, etc.',
        items: ['Basilic','Menthe','Thym','Romarin','Coriandre','Persil','Ciboulette','Origan','Laurier','Aneth']
    },
    'produitstransformeslocaux': {
        name: 'Produits transformés locaux',
        image: new URL('@/assets/categories/produits_transformes_locaux.webp', import.meta.url).href,
        description: 'Attiéké, gari, etc.',
        items: ['Attiéké','Gari','Placali','Tapioca',"Farine de manioc","Bâtons de manioc","Farine de maïs","Poudre d'arachide","Beurre d'arachide","Chikwangue"]
    }

}
  