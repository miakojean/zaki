export const categoriesData = {
    'céréales': {
        name: 'céréales',
        r_name:'céréales',
        image: new URL('@/assets/categories/cereals.webp', import.meta.url).href,
        description: 'Riz, maïs, mil, sorgho, etc.',
        items: [ {name : 'Riz', price : 700}, {name : 'Maïs', price : 700}, {name : 'Mil', price : 700},
                 {name : 'Sorgho', price : 700}, {name : 'Blé', price : 700}, {name : 'Avoine', price : 700}, 
                 {name : 'Orge', price : 700} , {name : 'Fonio', price : 700}]
    },
    'fruits': {
        name: 'fruits',
        r_name: 'fruits',
        image: new URL('@/assets/categories/fruits.webp', import.meta.url).href,
        description: 'Mangue, orange, ananas, etc.',
        items :[
            {name : 'Mangue', price : 700}, {name : 'Orange', price : 700}, {name : 'Ananas', price : 700},
            {name : 'Papaye', price : 700}, {name : 'Goyave', price : 700}, {name : 'Banane', price : 700},
            {name : 'Pomme', price : 700}, {name : 'Poire', price : 700}, {name : 'Fraise', price : 700},
            {name : 'Framboise', price : 700}, {name : 'Cerise', price : 700}, {name : 'Abricot', price : 700},
            {name : 'Pêche', price : 700}, {name : 'Nectarine', price : 700}, {name : 'Kiwi', price : 700},
            {name : 'Citron', price : 700}, {name : 'Mandarine', price : 700}, {name : 'Pamplemousse', price : 700},
            {name : 'Raisin', price : 700}, {name : 'Melon', price : 700}, {name : 'Pastèque', price : 700},
            {name : 'Prune', price : 700}, {name : 'Mirabelle', price : 700}, {name : 'Cassis', price : 700},
            {name : 'Myrtille', price : 700}, {name : 'Groseille', price : 700}, {name : 'Figue', price : 700},
            {name : 'Kaki', price : 700}, {name : 'Grenade', price : 700}, {name : 'Litchi', price : 700},
            {name : 'Noix de coco', price : 700}, {name : 'Fruit de la passion', price : 700}, {name : 'Grenade', price : 700},
            {name : 'Pomme grenade', price : 700}
        ]    
    },
    'légumes': {
        name: 'légumes',
        r_name: 'légumes',
        image: new URL('@/assets/categories/legumes.webp', import.meta.url).href,
        description: 'Tomates, oignons, aubergines, etc.',
        items :[
            {name : 'Laitue', price : 700}, {name : 'Épinards', price : 700}, {name : 'Carotte', price : 700},
            {name : 'Tomates', price : 700}, {name : 'Aubergines', price : 700}, {name : 'Courgettes', price : 700},
            {name : 'Concombres', price : 700}, {name : 'Piments', price : 700}, {name : 'Poivrons (vert, rouge, jaune)', price : 700},
            {name : 'Oignons', price : 700}, {name : 'Ail', price : 700}, {name : 'Échalotes', price : 700},
            {name : 'Gombo', price : 700}, {name : 'Chou-fleur', price : 700}, {name : 'Chou rouge', price : 700},
            {name : 'Okra', price : 700}, {name : 'Brocoli', price : 700}
        ]
    },
    'tubercules': {
        name: 'tubercules',
        r_name: 'tubercules',
        image: new URL('@/assets/categories/tubercules.png', import.meta.url).href,
        description: 'Pommes de terre, patates douces, etc.',
        items :[
            {name : 'Pomme de terre', price : 700}, {name : 'Patate douce', price : 700}, {name : 'Manioc', price : 700},
            {name : 'Carotte', price : 700}, {name : 'Navet', price : 700}, {name : 'Betterave', price : 700},
            {name : 'Topinambour', price : 700}, {name : 'Oignon nouveau', price : 700}
        ]
    },
    'légumineuses': {
        name: 'légumineuses',
        r_name: 'légumineuses',
        image: new URL('@/assets/categories/legumineuses.webp', import.meta.url).href,
        description: 'Lentilles, haricots, pois chiches, etc.',
        items :[
            {name : 'Lentilles', price : 700}, {name : 'Haricots blancs', price : 700}, {name : 'Haricots rouges', price : 700},
            {name : 'Pois chiches', price : 700}, {name : 'Fèves', price : 700}, {name : 'Pois cassés', price : 700},
            {name : 'Lupins', price : 700}, {name : 'Soja', price : 700}
        ]
    },
    'produitsdelamer': {
        name: 'produitsdelamer',
        r_name: 'produits de la mer',
        image: new URL('@/assets/categories/produits_de_la_mer.webp', import.meta.url).href,
        description: 'Poissons, crustacés, mollusques, etc.',
        items :[
            {name : 'Saumon', price : 700}, {name : 'Thon', price : 700}, {name : 'Maquereau', price : 700},
            {name : 'Cabillaud', price : 700}, {name : 'Crevettes', price : 700}, {name : 'Homard', price : 700},
            {name : 'Moules', price : 700}, {name : 'Huîtres', price : 700}, {name : 'Calmar', price : 700},
            {name : 'Seiche', price : 700}
        ]
    },
    'produitslaitiers': {
        name: 'produitslaitiers',
        r_name:'produits laitiers',
        image: new URL('@/assets/categories/produits_laitiers.webp', import.meta.url).href,
        description: 'Lait, yaourts, fromages, etc.',
        items :[
            {name : 'Lait entier', price : 700}, {name : 'Lait demi-écrémé', price : 700}, {name : 'Lait écrémé', price : 700},
            {name : 'Yaourt nature', price : 700}, {name : 'Yaourt aux fruits', price : 700}, {name : 'Fromage blanc', price : 700},
            {name : 'Fromage frais', price : 700}, {name : 'Fromage à pâte dure', price : 700}, {name : 'Fromage à pâte molle', price : 700},
            {name : 'Beurre', price : 700}
        ]
    },
    'viandes': {
        name: 'viandes',
        r_name: 'viandes',
        image: new URL('@/assets/categories/viandes.webp', import.meta.url).href,
        description: 'Bœuf, poulet, porc, etc.',
        items: [
            {name : 'Bœuf', price : 700}, {name : 'Poulet', price : 700}, {name : 'Porc', price : 700},
            {name : 'Agneau', price : 700}, {name : 'Dinde', price : 700}, {name : 'Canard', price : 700},
            {name : 'Lapin', price : 700}, {name : 'Chèvre', price : 700}, {name : 'Côte de bœuf', price : 700},
            {name : 'Saucisse', price : 700}
        ]
    },
    'epicesetcondiments': {
        name: 'epicesetcondiments',
        r_name:'epices et condiments',
        image: new URL('@/assets/categories/epices_et_condiments.webp', import.meta.url).href,
        description: 'Poivre, sel, gingembre, etc.',
        items :[
            {name : 'Poivre noir', price : 700}, {name : 'Sel', price : 700}, {name : 'Gingembre', price : 700},
            {name : 'Curcuma', price : 700}, {name : 'Paprika', price : 700}, {name : 'Cannelle', price : 700},
            {name : 'Clou de girofle', price : 700}, {name : 'Noix de muscade', price : 700}, {name : 'Cumin', price : 700},
            {name : 'Piment', price : 700}, {name : 'Anis étoilé', price : 700}, {name : 'Cardamome', price : 700},
            {name : 'Coriandre en poudre', price : 700}, {name : 'Moutarde', price : 700}
        ]
    },
    'huilesetgraisses': {
        name: 'huilesetgraisses',
        r_name: 'huiles et graisses',
        image: new URL('@/assets/categories/huiles_et_graisses.webp', import.meta.url).href,
        description: 'Huile de palme, beurre de karité, etc.',
        items :[
            {name : 'Huile de palme', price : 700}, {name : 'Huile d\'arachide', price : 700}, {name : 'Huile de tournesol', price : 700},
            {name : 'Huile d\'olive', price : 700}, {name : 'Beurre de karité', price : 700}, {name : 'Margarine', price : 700},
            {name : 'Beurre', price : 700}, {name : 'Graisse de coco', price : 700}, {name : 'Graisse animale', price : 700},
            {name : 'Huile de soja', price : 700}
        ]
    },
    'fleursetplantesaromatiques': {
        name: 'fleursetplantesaromatiques',
        r_name: 'fleurs et plantes aromatiques',
        image: new URL('@/assets/categories/fleurs_et_plantes_aromatiques.webp', import.meta.url).href,
        description: 'Basilic, menthe, etc.',
        items: [
            {name : 'Basilic', price : 700}, {name : 'Menthe', price : 700}, {name : 'Thym', price : 700},
            {name : 'Romarin', price : 700}, {name : 'Coriandre', price : 700}, {name : 'Persil', price : 700},
            {name : 'Ciboulette', price : 700}, {name : 'Origan', price : 700}, {name : 'Laurier', price : 700},
            {name : 'Aneth', price : 700}
        ] 
    },
    'produitstransformeslocaux': {
        name: 'produitstransformeslocaux',
        r_name:'produits transformés locaux',
        image: new URL('@/assets/categories/produits_transformes_locaux.webp', import.meta.url).href,
        description: 'Attiéké, gari, etc.',
        items: ['Attiéké','Gari','Placali','Tapioca',"Farine de manioc","Bâtons de manioc","Farine de maïs","Poudre d'arachide","Beurre d'arachide","Chikwangue"],
        items :[
            {name : 'Attiéké', price : 700}, {name : 'Gari', price : 700}, {name : 'Placali', price : 700},
            {name : 'Tapioca', price : 700}, {name : 'Farine de manioc', price : 700}, {name : 'Bâtons de manioc', price : 700},
            {name : 'Farine de maïs', price : 700}, {name : 'Poudre d\'arachide', price : 700}, {name : 'Beurre d\'arachide', price : 700},
            {name : 'Chikwangue', price : 700}
        ]
    }

}
  