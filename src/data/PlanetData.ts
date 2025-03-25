export interface PlanetData {
  name: string
  texture: string
  size: number
  orbitRadius: number
  orbitSpeed: number // secondes par orbite
  rotationSpeed: number // radians par seconde
  distanceFromSun: string
  diameter: string
  dayLength: string
  yearLength: string
  description: string
  composition: string
  moons: number
  notableMoons?: string
}

export const planetData: PlanetData[] = [
  {
    name: "Mercure",
    texture: "mercury.jpg",
    size: 0.8,
    orbitRadius: 10,
    orbitSpeed: 5,
    rotationSpeed: 0.05,
    distanceFromSun: "57,9 millions de km",
    diameter: "4 880 km",
    dayLength: "58,6 jours terrestres",
    yearLength: "88 jours terrestres",
    description:
      "Mercure est la planète la plus proche du Soleil et la plus petite du Système solaire. En raison de l'absence quasi totale d'atmosphère, elle subit des variations extrêmes de température entre le jour et la nuit. Sa surface est recouverte de cratères d'impact, rappelant celle de la Lune. Sa proximité avec le Soleil lui confère une orbite très rapide, complétant une révolution en seulement 88 jours terrestres.",
    composition:
      "Planète rocheuse avec un noyau métallique très dense qui représente environ 60 % de sa masse.",
    moons: 0,
  },
  {
    name: "Vénus",
    texture: "venus.jpg",
    size: 1.5,
    orbitRadius: 15,
    orbitSpeed: 8,
    rotationSpeed: 0.03,
    distanceFromSun: "108,2 millions de km",
    diameter: "12 104 km",
    dayLength: "243 jours terrestres",
    yearLength: "225 jours terrestres",
    description:
      "Vénus est la deuxième planète du Système solaire et la plus chaude en raison de son atmosphère extrêmement dense composée principalement de dioxyde de carbone. Elle produit un effet de serre puissant, faisant grimper sa température de surface à environ 467°C. Sa rotation est très lente et rétrograde, ce qui signifie qu'elle tourne sur elle-même en sens inverse de la plupart des planètes.",
    composition:
      "Planète rocheuse avec une atmosphère épaisse composée de dioxyde de carbone et de nuages de soufre.",
    moons: 0,
  },
  {
    name: "Terre",
    texture: "earth.jpg",
    size: 1.5,
    orbitRadius: 20,
    orbitSpeed: 10,
    rotationSpeed: 0.1,
    distanceFromSun: "149,6 millions de km",
    diameter: "12 742 km",
    dayLength: "24 heures",
    yearLength: "365,25 jours",
    description:
      "La Terre est la seule planète connue pour abriter la vie. Elle possède une atmosphère riche en oxygène et en azote, ainsi qu’une surface recouverte à 71 % d’eau. Son climat et sa géologie sont en grande partie façonnés par l'interaction entre l'atmosphère, l'hydrosphère et la lithosphère.",
    composition:
      "Planète rocheuse avec un noyau métallique et une croûte principalement composée de silicates.",
    moons: 1,
    notableMoons: "La Lune",
  },
  {
    name: "Mars",
    texture: "mars.jpg",
    size: 1.2,
    orbitRadius: 25,
    orbitSpeed: 12,
    rotationSpeed: 0.08,
    distanceFromSun: "227,9 millions de km",
    diameter: "6 779 km",
    dayLength: "24,6 heures",
    yearLength: "687 jours terrestres",
    description:
      "Surnommée la 'planète rouge' en raison de la présence d’oxyde de fer à sa surface, Mars est une planète froide et désertique. Son atmosphère ténue ne permet pas de retenir beaucoup de chaleur, ce qui entraîne des températures glaciales. Elle est la cible principale des explorations spatiales en raison de la possibilité qu’elle ait abrité de l’eau liquide dans le passé.",
    composition:
      "Planète rocheuse avec une atmosphère mince composée principalement de dioxyde de carbone.",
    moons: 2,
    notableMoons: "Phobos et Deimos",
  },
  {
    name: "Jupiter",
    texture: "jupiter.jpg",
    size: 3.5,
    orbitRadius: 35,
    orbitSpeed: 20,
    rotationSpeed: 0.15,
    distanceFromSun: "778,5 millions de km",
    diameter: "139 820 km",
    dayLength: "9,9 heures",
    yearLength: "11,9 ans terrestres",
    description:
      "Jupiter est la plus grande planète du Système solaire. C'est une géante gazeuse composée principalement d'hydrogène et d'hélium. Elle est célèbre pour sa grande tache rouge, une immense tempête qui dure depuis des siècles. Elle possède un puissant champ magnétique et un vaste système de lunes.",
    composition:
      "Géante gazeuse composée principalement d’hydrogène et d’hélium, avec un noyau rocheux probable.",
    moons: 79,
    notableMoons: "Io, Europe, Ganymède et Callisto",
  },
  {
    name: "Saturne",
    texture: "saturn.jpg",
    size: 3,
    orbitRadius: 45,
    orbitSpeed: 25,
    rotationSpeed: 0.14,
    distanceFromSun: "1,4 milliard de km",
    diameter: "116 460 km",
    dayLength: "10,7 heures",
    yearLength: "29,5 ans terrestres",
    description:
      "Saturne est célèbre pour son système d'anneaux spectaculaires composés de glace et de poussière. C'est une planète géante gazeuse similaire à Jupiter, mais avec une densité si faible qu'elle pourrait flotter sur l'eau. Ses anneaux sont les plus brillants et étendus du Système solaire.",
    composition:
      "Géante gazeuse composée principalement d’hydrogène et d’hélium, avec un noyau rocheux.",
    moons: 82,
    notableMoons: "Titan, Encelade, Mimas, Téthys, Dioné et Rhéa",
  },
  {
    name: "Uranus",
    texture: "uranus.jpg",
    size: 2.5,
    orbitRadius: 55,
    orbitSpeed: 30,
    rotationSpeed: 0.12,
    distanceFromSun: "2,9 milliards de km",
    diameter: "50 724 km",
    dayLength: "17,2 heures",
    yearLength: "84 ans terrestres",
    description:
      "Uranus est une planète unique car elle tourne sur le côté, probablement à la suite d'une collision avec un objet massif dans le passé. Son atmosphère contient du méthane, ce qui lui donne une couleur bleu-vert distincte. C’est une géante de glace avec un intérieur riche en eau, en ammoniaque et en méthane.",
    composition:
      "Géante de glace composée principalement d’eau, de méthane et d’ammoniac au-dessus d’un noyau rocheux.",
    moons: 27,
    notableMoons: "Miranda, Ariel, Umbriel, Titania et Obéron",
  },
  {
    name: "Neptune",
    texture: "neptune.jpg",
    size: 2.3,
    orbitRadius: 65,
    orbitSpeed: 35,
    rotationSpeed: 0.13,
    distanceFromSun: "4,5 milliards de km",
    diameter: "49 244 km",
    dayLength: "16,1 heures",
    yearLength: "165 ans terrestres",
    description:
      "Neptune est la planète la plus éloignée du Soleil et la plus froide. C'est une géante de glace connue pour ses vents violents pouvant atteindre 2 100 km/h. Elle possède une atmosphère composée principalement d'hydrogène, d'hélium et de méthane, ce dernier lui donnant sa teinte bleue caractéristique.",
    composition:
      "Géante de glace composée principalement d’eau, de méthane et d’ammoniac au-dessus d’un noyau rocheux.",
    moons: 14,
    notableMoons: "Triton, Néréide et Protée",
  },
]
