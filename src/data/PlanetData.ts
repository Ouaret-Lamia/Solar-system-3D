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
    texture: "mercure.jpg",
    size: 0.8,
    orbitRadius: 10,
    orbitSpeed: 5,
    rotationSpeed: 0.05,
    distanceFromSun: "57,9 millions de km",
    diameter: "4 880 km",
    dayLength: "58,6 jours terrestres",
    yearLength: "88 jours terrestres",
    description:
      "Mercure est la planète la plus proche du Soleil et également la plus petite du Système solaire. Sa surface est couverte de cratères, résultant d’impacts météoritiques survenus au fil des milliards d’années. Son absence d’atmosphère significative empêche la rétention de la chaleur, entraînant des températures extrêmes : jusqu’à 430°C en journée et -180°C la nuit. En raison de sa proximité avec le Soleil, elle subit également un effet de marée gravitationnelle qui ralentit considérablement sa rotation, rendant ses jours très longs par rapport à son année.",
    composition:
      "Mercure est une planète rocheuse avec un noyau métallique extrêmement dense, représentant environ 60 % de sa masse totale. Sa croûte est composée principalement de silicates, et il est probable qu’elle ait autrefois possédé une activité volcanique. Cependant, contrairement à la Terre, elle ne présente aucune tectonique des plaques, ce qui a figé sa surface depuis des milliards d’années.",
    moons: 0,
  },
  {
    name: "Venus",
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
      "Vénus est souvent surnommée la 'sœur jumelle' de la Terre en raison de sa taille similaire, mais elle est en réalité un monde infernal. Son atmosphère dense est composée principalement de dioxyde de carbone, créant un effet de serre extrême qui maintient des températures de surface avoisinant les 467°C, ce qui en fait la planète la plus chaude du Système solaire. Sa pression atmosphérique est environ 92 fois celle de la Terre, rendant son environnement totalement inhospitalier. De plus, elle tourne sur elle-même très lentement et dans le sens inverse de la plupart des autres planètes, un phénomène unique dans notre Système solaire.",
    composition:
      "Vénus est une planète rocheuse recouverte de vastes plaines volcaniques et de montagnes. Son atmosphère épaisse est constituée principalement de dioxyde de carbone, avec des nuages composés d’acide sulfurique. On pense que la planète a subi un effet de serre incontrôlable, ayant peut-être eu un passé plus tempéré avant que son atmosphère ne devienne aussi dense et étouffante.",
    moons: 0,
  },
  {
    name: "Terre",
    texture: "terre.jpg",
    size: 1.5,
    orbitRadius: 20,
    orbitSpeed: 10,
    rotationSpeed: 0.1,
    distanceFromSun: "149,6 millions de km",
    diameter: "12 742 km",
    dayLength: "24 heures",
    yearLength: "365,25 jours",
    description:
      "La Terre est la seule planète connue à abriter la vie. Sa biosphère riche et diversifiée est rendue possible grâce à une atmosphère stable composée principalement d’azote et d’oxygène. Sa surface est recouverte à 71 % d’eau, jouant un rôle clé dans la régulation du climat et dans le développement de la vie. La Terre possède également un champ magnétique puissant, qui la protège des radiations solaires et des vents cosmiques.",
    composition:
      "Planète tellurique avec une structure interne bien différenciée, la Terre est constituée d’un noyau métallique interne et externe, d’un manteau de roches en fusion et d’une croûte solide. Son atmosphère est composée à environ 78 % d’azote et 21 % d’oxygène, favorisant la respiration et le développement de la vie.",
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
      "Mars est souvent appelée la 'planète rouge' en raison de sa surface recouverte de poussière d’oxyde de fer, lui donnant sa couleur caractéristique. C’est une planète froide et désertique avec une fine atmosphère composée principalement de dioxyde de carbone. Les scientifiques s’y intéressent particulièrement car elle présente des indices d’eau gelée sous sa surface et dans ses calottes polaires, faisant d’elle une candidate idéale pour la recherche de vie passée.",
    composition:
      "Mars est une planète rocheuse dont la surface est recouverte de dunes, de vallées et d’anciens lits de rivières asséchés. Son atmosphère est extrêmement mince et incapable de retenir la chaleur. Elle contient en majorité du dioxyde de carbone, rendant la planète inhospitalière pour la vie humaine sans protection.",
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
      "Jupiter est la plus grande planète du Système solaire et est principalement composée de gaz. Elle est célèbre pour sa Grande Tache Rouge, une immense tempête qui dure depuis des siècles. Son puissant champ magnétique en fait une planète intrigante et mystérieuse, et certaines de ses lunes, comme Europe, pourraient abriter des océans sous leur surface glacée.",
    composition:
      "Jupiter est constituée essentiellement d’hydrogène et d’hélium, sans véritable surface solide. Son noyau pourrait être rocheux, entouré de couches d’hydrogène métallique liquide et de gaz en perpétuelle turbulence.",
    moons: 79,
    notableMoons: "Io, Europe, Ganymède et Callisto",
  },
  {
    name: "Saturne",
    texture: "saturne.jpg",
    size: 3,
    orbitRadius: 45,
    orbitSpeed: 25,
    rotationSpeed: 0.14,
    distanceFromSun: "1,4 milliard de km",
    diameter: "116 460 km",
    dayLength: "10,7 heures",
    yearLength: "29,5 ans terrestres",
    description:
      "Saturne est célèbre pour son magnifique système d’anneaux composés de glace et de roches. C’est la deuxième plus grande planète du Système solaire et elle possède un grand nombre de lunes, dont Titan, qui est une des seules lunes connues à avoir une atmosphère dense.",
    composition:
      "Comme Jupiter, Saturne est une géante gazeuse principalement composée d’hydrogène et d’hélium. Ses anneaux sont constitués de milliards de particules de glace et de roche, allant de la taille d’un grain de sable à celle d’une montagne.",
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
      "C’est une géante de glace composée principalement d’eau, de méthane et d’ammoniac. Son noyau est probablement rocheux.",
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
