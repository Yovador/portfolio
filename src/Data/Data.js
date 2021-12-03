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
    "Jeu / Projet Étudiant",
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
    "Jeu / Projet Étudiant",
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
    "Jeu / Game Jam",
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
    "Jeu / Projet Étudiant",
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
    "Jeu / Game Jam",
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
    "Jeu / Game Jam",
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
    "Jeu / Game Jam",
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
    "Jeu / Projet Étudiant",
    "Basée sur la gravure éponyme de l'artiste Philip Mohlitz, Nuage est une expérience narrative se déroulant à l’intérieur du monde de l'œuvre. Notre équipe a ainsi recréé en 3D les différents éléments présents dans la gravure, et a construit un univers autour de tout cela. Je me suis personnellement occupé du développement Unity du jeu, ainsi que la création des différents Shaders donnant l’aspect “Dessin” à notre création.",
    picsNuage,
    "https://yoannbouquey.com/Nuage",
    "Lien vers le Jeu"
)

const picsTronEffect= [
    new Pic("./assets/images/screens/Troneffect/tron-effect (4).png", "Screenshot de TronEffect"),
    new Pic("./assets/images/screens/Troneffect/tron-effect (1).png", "Screenshot de TronEffect"),
    new Pic("./assets/images/screens/Troneffect/tron-effect (2).png", "Screenshot de TronEffect"),
    new Pic("./assets/images/screens/Troneffect/tron-effect (3).png", "Screenshot de TronEffect"),
    new Pic("./assets/images/screens/Troneffect/tron-effect (5).png", "Screenshot de TronEffect"),

]

const troneffect = new Game(
    "Tron Effect",
    "Jeu VR / Projet Étudiant",
    "Tron Effect est un jeu en Réalité virtuelle reprenant à la manière de Tetris Effect le jeu d’arcade Tron. Il a été développé sur Unity à l’aide du package pour VR OpenXR. Rémi Andrez, Ciel Not, et moi même avons réalisé ce jeu en  5 semaines de cours, donc 2 semaines de travail en autonomie. Tron Effect fût pour moi un projet très intéressant. J’ai été chargée du développement, ainsi que de la gestion de projet. Lors de ce projet, j’ai pu réalisé des Shaders, notamment le Shader responsable du comportement responsable des néons du décors. Ces derniers réagissent à la musique, ainsi qu’au score du joueur et de l’ordinateur. J’ai aussi pu réaliser le modèle 3D d’un des 3 véhicules jouables, et ai eu à optimiser le jeu pour atteindre une framerate acceptable sur l’Oculus.",
    picsTronEffect,
    "https://marchosias6.itch.io/tron-effect",
    "Lien de la Page itch.io"
)

const picsARChicken= [
    new Pic("./assets/images/screens/ARChicken/archicken (1).jpg", "Screenshot de ARChicken"),
    new Pic("./assets/images/screens/ARChicken/archicken (2).jpg", "Screenshot de ARChicken"),
    new Pic("./assets/images/screens/ARChicken/archicken (3).jpg", "Screenshot de ARChicken"),
    new Pic("./assets/images/screens/ARChicken/archicken (4).jpg", "Screenshot de ARChicken"),
    new Pic("./assets/images/screens/ARChicken/archicken (5).jpg", "Screenshot de ARChicken"),
    new Pic("./assets/images/screens/ARChicken/archicken (6).jpg", "Screenshot de ARChicken"),
    new Pic("./assets/images/screens/ARChicken/archicken (7).jpg", "Screenshot de ARChicken"),
]

const archicken = new Game(
    "Chicken on a Raft, an Augmented Reality Experience",
    "Experience de réalité augmenté / Projet Étudiant",
    'Chicken on a Raft, an Augmented Reality Experience est une expérience de réalité augmentée sur mobile. Le projet a été réalisé en une semaine par Rémi Andrez et moi. L’objectif était de créer un objet de communication fictif pour promouvoir un produit, un événement, etc… Nous avons décidé de promouvoir “Chicken on a Raft” une musique du groupe Alestorm. L’expérience consiste d’un marqueur qui lorsqu’il est vu par la caméra du téléphone affiche une reproduction en 3D de la pochette d’album et de la musique en fond.',
    picsARChicken,
    "https://miami-tarbes.com/groupes/majimage/",
    "Lien de l'expérience"
)

const picsCybernetic= [
    new Pic("./assets/images/screens/cybernetic/cybernetic (6).jpg", "Screenshot de Samedi 10h"),
    new Pic("./assets/images/screens/cybernetic/cybernetic (1).jpg", "Screenshot de Samedi 10h"),
    new Pic("./assets/images/screens/cybernetic/cybernetic (3).jpg", "Screenshot de Samedi 10h"),
    new Pic("./assets/images/screens/cybernetic/cybernetic (2).jpg", "Screenshot de Samedi 10h"),
    new Pic("./assets/images/screens/cybernetic/cybernetic (5).jpg", "Screenshot de Samedi 10h"),
    new Pic("./assets/images/screens/cybernetic/cybernetic (4).jpg", "Screenshot de Samedi 10h"),

]

const cybernetic = new Game(
    "Samedi 10h - Projet Cybernetic",
    "Jeu de sensibilisation /Stage de fin d'études",
    "En lien avec la cellule NTech de Gironde de la Gendarmerie Nationale, ce projet s'est déroulé durant mes deux mois de stage de fin de DUT. Ce projet à abouti à la création d’un jeu vidéo mobile sensibilisant au Cyberharcèlement. Le jeu prend la forme de discussions fictives à choix multiples sous l’apparence de discussions par message. Lors de ce projet, j’ai eu comme rôle le développement, ainsi que la gestion de projet. J’ai par conséquent eu à réaliser un système permettant à l’équipe responsable de la narration la création de fichier JSON contenant toutes les informations nécessaires à l’affichage en jeu d’une discussion. J’ai aussi eu à créer à l’aide des outils d’UI d’Unity la lecture des fichiers JSON et leur affichage. ",
    picsCybernetic,
    "",
    "Le projet n'est pas public pour le moment"
)

const picsHaptic= [
    new Pic("./assets/images/screens/haptic/haptic (3).jpg", "Screenshot du projet Haptic Fans4All"),
    new Pic("./assets/images/screens/haptic/haptic (1).jpg", "Screenshot du projet Haptic Fans4All"),
    new Pic("./assets/images/screens/haptic/haptic (2).jpg", "Screenshot du projet Haptic Fans4All"),
    new Pic("./assets/images/screens/haptic/haptic (4).jpg", "Screenshot du projet Haptic Fans4All"),


]

const haptic = new Game(
    "Projet de Dispositif Haptic en collaboration avec Fans4All",
    "Dispositif de suppléance pour pilotes HSI / Projet tuteuré",
    "Les pilotes d’avion HSI sont des pilotes atteints de handicaps ou de difficultés de l’audition  et / ou de la parole, c'est-à-dire, atteints d’une surdité partielle ou totale ou de troubles d'élocution. Fans4All est une association ayant pour but de promouvoir et de faciliter l’autonomie des pilotes HSI à l’aide de technologies adaptées et dans une démarche inclusive. Elle travaille actuellement à développer un équipement de suppléance multimodal pour les pilotes HSI qui explore différents types de solutions et technologies. Je suis personnellement intervenu sur la création d’un dictionnaire de pattern de vibration dans le but de communiquer des informations aux pilotes HSI. J’ai pu travailler avec une veste Haptique BHaptic Tactsuit X40, j’ai aussi eu à développer une application Android, et eu à réaliser différents document de cadrage.",
    picsHaptic,
    "https://fans4all.org/",
    "Lien de l'association Fans4all"
)

export const games = [troneffect, cybernetic, archicken, haptic, masuku, nuage, thh] 

export const whoami = "J’ai toujours été passionnée par toutes les facettes des jeux vidéo. J’ai donc très vite été attirée par la conception d'expériences immersives, et j’ai décidé d’en faire ma carrière. Développement, game design, modélisation 3D, dessin, je suis intéressée par tous les domaines de la création, c’est pourquoi je me suis orientée vers un cursus à visée polyvalente. J’ai commencé par un DUT Métiers du Multimédia et de l’Internet. J’ai pu ainsi apprendre le développement Web, le développement Unity, les métiers de la recherche utilisateurs et du design d’interface, la gestion de projet et les métiers de l’audiovisuel. J’ai poursuivi mon parcours grâce à une licence professionnelle Médias Interactifs et Applications Mixtes Immersives dans le but de commencer à me spécialiser dans la création d’oeuvre interactive. Toutes ses formations avaient pour objectif la polyvalence et le travail en équipe. Par conséquent, je suis capable de facilement m’adapter aux différentes situations de la création d’expérience intéractive."
export const portraitSelf = new Pic("./assets/images/portrait.jpg", "Portrait de Yoann Bouquey")


const data = "Data Loaded"
export default data