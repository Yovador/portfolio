class Pic{
    constructor(path, alt){
        this.path = path;
        this.alt = alt;
    }
}


class Game {
    constructor(name, type, desc, pics, url, buttonTitle){
        this.name = name;
        this.type = type;
        this.desc = desc;
        this.pics = pics;
        this.url = url;
        this.buttonTitle = buttonTitle;

    }
}




const picsMasuku = [
    new Pic("./assets/images/screens/Masuku/Menu Masuku (2).png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (1)-min.png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (2)-min.png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (3)-min.png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (4)-min.png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (5)-min.png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (6)-min.png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (7)-min.png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (8)-min.png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (9)-min.png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (10)-min.png", "Screenshot de Masuku"),
    new Pic("./assets/images/screens/Masuku/Masuku (11)-min.png", "Screenshot de Masuku")    
]

const masuku = new Game(
    "Masuku", 
    "Jeux / Projet Étudiant",
    "Masuku est un auquel j'ai participé à la réalisation, et cela en une semaine lors de ma formation. Pour ce projet, j’étais accompagné de Remi Andrez (Modèle 3D), Flora Moreau (Modèle 3D et Gestion de Projet), Justine Magry (Modèle 3D, Direction Artistique), Ciel Not (Développement des Menus, Game Design et Level Design), Samuel Agut (Modèle 3D, Son) et Lucas Marsalle (Réalisation d’un Making off). Je me suis personnellement chargé du développement et du Game Design / Level Design. Ce jeu est mon deuxième jeu réalisé en 3D Unity, et il m’a permis de grandement comprendre le fonctionnement de la lumière et de l’URP (Universal Render Pipeline). ", 
    picsMasuku, "https://yovadorgmailcom.itch.io/masuku", 
    "Lien de la Page itch.io"
    ) 


const picsHebi = [
    new Pic("./assets/images/screens/Hebi/Hebi (1)-min.png", "Screenshot de Hebi's Story"),
    new Pic("./assets/images/screens/Hebi/Hebi (2)-min.png", "Screenshot de Hebi's Story"),
    new Pic("./assets/images/screens/Hebi/Hebi (3)-min.png", "Screenshot de Hebi's Story"),
    new Pic("./assets/images/screens/Hebi/Hebi (4)-min.png", "Screenshot de Hebi's Story"),
    new Pic("./assets/images/screens/Hebi/Hebi (5)-min.png", "Screenshot de Hebi's Story"),
    new Pic("./assets/images/screens/Hebi/Hebi (6)-min.png", "Screenshot de HeHebi's Storybi")
]
    
const hebi = new Game(
    "Hebi's Story", 
    "Jeux / Projet Étudiant",
    "Hebi’s Story a été réalisé par moi et mon équipe en une semaine dans le cadre de la semaine “Handiplay” durant ma première année en MMI. L’objectif de la semaine était de créer un jeu avec un objectif : l’accessibilité. Pour ce faire, notre équipe constituée de Rémi Andrez, Flora Moreau, Ciel Not, et moi même avons conçu un jeu de type \"Snake\" incluant des murs en obstacles supplémentaires. Il dispose de nombreuses options d’accessibilités, par exemple : les menus sont entièrement navigables au clavier, toutes les touches sont modifiables, la vitesse du jeu est ajustable, et les couleurs du jeu ont un haut taux de contraste. Je me suis personnellement chargé de l’implémentation du jeu sous Unity ainsi que d'une partie du Game Design.", 
    picsHebi,
    "https://yovadorgmailcom.itch.io/handiplay-2020-groupe6", 
    "Lien de la Page itch.io"
    ) 

const picsEmi = [
    new Pic("./assets/images/screens/Emy/Emy (8)-min.png", "Screenshot de Emy en une Nuit"),   
    new Pic("./assets/images/screens/Emy/Emy (1)-min.png", "Screenshot de Emy en une Nuit"),
    new Pic("./assets/images/screens/Emy/Emy (2)-min.png", "Screenshot de Emy en une Nuit"),
    new Pic("./assets/images/screens/Emy/Emy (3)-min.png", "Screenshot de Emy en une Nuit"),
    new Pic("./assets/images/screens/Emy/Emy (4)-min.png", "Screenshot de Emy en une Nuit"),
    new Pic("./assets/images/screens/Emy/Emy (5)-min.png", "Screenshot de Emy en une Nuit"),
    new Pic("./assets/images/screens/Emy/Emy (6)-min.png", "Screenshot de Emy en une Nuit"),
    new Pic("./assets/images/screens/Emy/Emy (7)-min.png", "Screenshot de Emy en une Nuit"),
]

const emi = new Game(
    "EMMI Jam 2020 - Emy en une nuit", 
    "Jeux / Game Jam",
    "Emy en une nuit est ma participation à la Game Jam EMMI 2020. Cette Game Jam est organisée entre les étudiants de la filière MMI Bordeaux et ceux de l’ENSEIRB Matméca. Elle a duré 48h et le thème était “EMMI et une nuit”. Dans ce projet, nous étions une équipe de six : Remi Andrez, Ciel Not, Maël Keryell-Even, Quentin Lanneau, Raphaël Geynet  et moi même. J'étais le Game Designer et Level Designer de l’équipe, et j’ai aussi fourni des assets graphiques.", 
    picsEmi,
    "https://emyenunenuit.itch.io/emy-en-une-nuit-finale", 
    "Lien de la Page itch.io"
    ) 


const picsPT = [
    new Pic("./assets/images/screens/Playthesis/playthesis (2).png", "Screenshot de Playthesis"),
    new Pic("./assets/images/screens/Playthesis/playthesis (3).png", "Screenshot de Playthesis"),
    new Pic("./assets/images/screens/Playthesis/playthesis (1).png", "Screenshot de Playthesis"),
    new Pic("./assets/images/screens/Playthesis/playthesis (5).png", "Screenshot de Playthesis"),
    new Pic("./assets/images/screens/Playthesis/playthesis (6).png", "Screenshot de Playthesis"),
    new Pic("./assets/images/screens/Playthesis/playthesis (4).png", "Screenshot de Playthesis"),

]

const pt = new Game(
    "Playthesis", 
    "Jeux / Projet Étudiant",
    "Playthesis est une plateforme de jeu mobile à destination des personnes amputées pour les aider lors de leur rééducation. Pour ce faire, les jeux utilisent un bracelet myoélectrique, qui lit la contraction des muscles et les transmets ensuite au jeu, permettant aux personnes amputées d'entraîner leur bras dans la perspective de pouvoir contrôler une prothèse. J’ai participé au développement de deux des jeux de la plateforme, Seiko et Fishhub.", 
    picsPT,
    "https://playthesis.fr/", 
    "Lien du site Web"
    ) 



const picsGB = [
    new Pic("./assets/images/screens/Gobelin/gobelin (1)-min.png", "Screenshot de Let's Kill Gobelin"),
    new Pic("./assets/images/screens/Gobelin/gobelin (2)-min.png", "Screenshot de Let's Kill Gobelin"),
    new Pic("./assets/images/screens/Gobelin/gobelin (3)-min.png", "Screenshot de Let's Kill Gobelin"),
    new Pic("./assets/images/screens/Gobelin/gobelin (4)-min.png", "Screenshot de Let's Kill Gobelin"),
    new Pic("./assets/images/screens/Gobelin/gobelin (5)-min.png", "Screenshot de Let's Kill Gobelin"),
    new Pic("./assets/images/screens/Gobelin/gobelin (6)-min.png", "Screenshot de Let's Kill Gobelin"),

]

const gb = new Game(
    "GMTK 2020 - Let's Kill Gobelin", 
    "Jeux / Game Jam",
    " Let’s kill Gobelin est ma participation à la Game Jam Games Maker’s Toolkit 2020 dont le thème était “Out of Control”. J’ai réalisé l'entièreté du jeu en 48h, que ce soit le développement, la conception graphique ou le game design. Dans ce jeu, le but est de créer une armée Gobelin assez faible pour être battue par vos Héros (que vous ne contrôlez pas) mais assez forte pour leur imposer un challenge satisfaisant et maximiser votre score. ", 
    picsGB,
    "https://yovadorgmailcom.itch.io/lets-kill-gobelin", 
    "Lien de la Page itch.io"
    ) 

const picsMJ = [
    new Pic("./assets/images/screens/Jellyman/jellyman (1)-min.png", "Screenshot de MisterJellyman"),
    new Pic("./assets/images/screens/Jellyman/jellyman (2)-min.png", "Screenshot de MisterJellyman"),
    new Pic("./assets/images/screens/Jellyman/jellyman (3)-min.png", "Screenshot de MisterJellyman"),
    new Pic("./assets/images/screens/Jellyman/jellyman (4)-min.png", "Screenshot de MisterJellyman"),
    new Pic("./assets/images/screens/Jellyman/jellyman (5)-min.png", "Screenshot de MisterJellyman"),
    new Pic("./assets/images/screens/Jellyman/jellyman (6)-min.png", "Screenshot de MisterJellyman"),

]

const mj = new Game(
    "GTMK 2019 - Mister Jellyman", 
    "Jeux / Game Jam",
    " Mister Jellyman est le tout premier jeu que j’ai réalisé, il date d’avant mon entrée en formation MMI pour la Game Jam Games Maker’s Toolkit 2019. Le thème était “Only one”, le jeu se contrôle donc uniquement avec la barre espace. Le joueur incarne Mister Jellyman qui utilise son bras de gelée pour s’accrocher au mur et se balancer. Le jeu est fait sous Gamemaker Studio premier du nom et a été réalisé sous 48h. ", 
    picsMJ,
    "https://yovadorgmailcom.itch.io/misterjellyman", 
    "Lien de la Page itch.io"
    ) 


const picsTHH = [
    new Pic("./assets/images/screens/thh/thh (6)-min.png", "Screenshot de The Helping Hand"),
    new Pic("./assets/images/screens/thh/thh (1)-min.png", "Screenshot de The Helping Hand"),
    new Pic("./assets/images/screens/thh/thh (2)-min.png", "Screenshot de The Helping Hand"),
    new Pic("./assets/images/screens/thh/thh (3)-min.png", "Screenshot de The Helping Hand"),
    new Pic("./assets/images/screens/thh/thh (4)-min.png", "Screenshot de The Helping Hand"),
    new Pic("./assets/images/screens/thh/thh (5)-min.png", "Screenshot de The Helping Hand"),
    new Pic("./assets/images/screens/thh/thh (7)-min.png", "Screenshot de The Helping Hand"),
    new Pic("./assets/images/screens/thh/thh (8)-min.png", "Screenshot de The Helping Hand"),
    new Pic("./assets/images/screens/thh/thh (9)-min.png", "Screenshot de The Helping Hand")
]

const thh = new Game(
    "EMMI 2021 - The Helping Hand",
    "Jeux / Game Jam",
    "Ce jeu à était réalisé lors de l’EMMI Game Jam 2021, qui vois participé des étudiants de MMI Bordeaux, de l’ENSEIRB MatMeca de Bordeaux, et de la Licence Professionnelle Métiers du Jeux Vidéos de Bobigny. Le thème de cette Game Jam était “Lost & Found”, et s'est déroulé sur une période de 48h. Lors de ce projet, j’ai été responsable du développement des actions du joueur, ainsi que du level design.",
    picsTHH,
    "https://marchosias6.itch.io/the-helping-hand",
    "Lien de la Page itch.io"
)

const picsNuage= [
    new Pic("./assets/images/screens/Nuage/nuage (1)-min.png", "Screenshot de Nuage"),
    new Pic("./assets/images/screens/Nuage/nuage (2)-min.png", "Screenshot de Nuage"),
    new Pic("./assets/images/screens/Nuage/nuage (3)-min.png", "Screenshot de Nuage"),
    new Pic("./assets/images/screens/Nuage/nuage (4)-min.png", "Screenshot de Nuage"),
    new Pic("./assets/images/screens/Nuage/nuage (5)-min.png", "Screenshot de Nuage"),
    new Pic("./assets/images/screens/Nuage/nuage (6)-min.png", "Screenshot de Nuage"),
    new Pic("./assets/images/screens/Nuage/nuage (7)-min.png", "Screenshot de Nuage"),
    new Pic("./assets/images/screens/Nuage/nuage (8)-min.png", "Screenshot de Nuage"),
    new Pic("./assets/images/screens/Nuage/nuage (9)-min.png", "Screenshot de Nuage"),
    new Pic("./assets/images/screens/Nuage/nuage (10)-min.png", "Screenshot de Nuage"),
    new Pic("./assets/images/screens/Nuage/nuage (11)-min.png", "Screenshot de Nuage")
]

const nuage = new Game(
    "Nuage",
    "Jeux / Projet Étudiant",
    "Basée sur la gravure éponyme de l'artiste Philip Mohlitz, Nuage est une expérience narrative se déroulant à l’intérieur du monde de l'œuvre. Notre équipe a ainsi recréé en 3D les différents éléments présents dans la gravure, et a construit un univers autour de tout cela. Je me suis personnellement occupé du développement Unity du jeu, ainsi que la création des différents Shaders donnant l’aspect “Dessin” à notre création.",
    picsNuage,
    "https://yoannbouquey.com/Nuage",
    "Lien vers le Jeu"
)

export const games = [masuku, nuage, thh, hebi, emi, pt, gb, mj] 

export const whoami = "Je suis Yoann Bouquey, j’ai 20 ans et actuellement étudiant en 2ème année d’un DUT Métier du Multimédia et de l’Internet (MMI) à Bordeaux Je suis aussi passionné par le Game Design et je cherche à en faire mon métier. Lors de ma formation j’ai eu l’occasion de réaliser plusieurs jeux de petite taille que ce soit grâce à des projets ou à des Game Jam. Je suis totalement autonome lorsqu’il s’agit de désigner et d’implémenter des mécaniques de jeux grâce à mes compétences en développement Unity / C#."
export const portraitSelf = new Pic("./assets/images/portrait.jpg", "Portrait de Yoann Bouquey")


const data = "Data Loaded"
export default data