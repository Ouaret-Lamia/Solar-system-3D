export interface PlanetData {
    name: string
    texture: string
    size: number
    orbitRadius: number
    orbitSpeed: number // seconds per orbit
    rotationSpeed: number // radians per second
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
      name: "Mercury",
      texture: "mercury.jpg",
      size: 0.8,
      orbitRadius: 10,
      orbitSpeed: 5,
      rotationSpeed: 0.05,
      distanceFromSun: "57.9 million km",
      diameter: "4,880 km",
      dayLength: "58.6 Earth days",
      yearLength: "88 Earth days",
      description:
        "Mercury is the smallest and innermost planet in the Solar System. It has no atmosphere to retain heat, causing extreme temperature variations.",
      composition: "Rocky planet with a large iron core that takes up about 60% of its mass.",
      moons: 0,
    },
    {
      name: "Venus",
      texture: "venus.jpg",
      size: 1.5,
      orbitRadius: 15,
      orbitSpeed: 8,
      rotationSpeed: 0.03,
      distanceFromSun: "108.2 million km",
      diameter: "12,104 km",
      dayLength: "243 Earth days",
      yearLength: "225 Earth days",
      description:
        "Venus is the second planet from the Sun and the hottest planet in our solar system due to its thick atmosphere that traps heat.",
      composition: "Rocky planet with a thick atmosphere composed mainly of carbon dioxide with clouds of sulfuric acid.",
      moons: 0,
    },
    {
      name: "Earth",
      texture: "earth.jpg",
      size: 1.5,
      orbitRadius: 20,
      orbitSpeed: 10,
      rotationSpeed: 0.1,
      distanceFromSun: "149.6 million km",
      diameter: "12,742 km",
      dayLength: "24 hours",
      yearLength: "365.25 days",
      description:
        "Earth is the third planet from the Sun and the only astronomical object known to harbor life. It has one natural satellite, the Moon.",
      composition: "Rocky planet with a nitrogen-oxygen atmosphere, 71% of the surface covered by water.",
      moons: 1,
      notableMoons: "The Moon",
    },
    {
      name: "Mars",
      texture: "mars.jpg",
      size: 1.2,
      orbitRadius: 25,
      orbitSpeed: 12,
      rotationSpeed: 0.08,
      distanceFromSun: "227.9 million km",
      diameter: "6,779 km",
      dayLength: "24.6 hours",
      yearLength: "687 Earth days",
      description:
        "Mars is the fourth planet from the Sun, often called the 'Red Planet' due to its reddish appearance caused by iron oxide on its surface.",
      composition: "Rocky planet with a thin atmosphere composed mainly of carbon dioxide.",
      moons: 2,
      notableMoons: "Phobos and Deimos",
    },
    {
      name: "Jupiter",
      texture: "jupiter.jpg",
      size: 3.5,
      orbitRadius: 35,
      orbitSpeed: 20,
      rotationSpeed: 0.15,
      distanceFromSun: "778.5 million km",
      diameter: "139,820 km",
      dayLength: "9.9 hours",
      yearLength: "11.9 Earth years",
      description:
        "Jupiter is the largest planet in our Solar System and the fifth from the Sun. It's a gas giant with a prominent system of rings and many moons.",
      composition: "Gas giant composed mainly of hydrogen and helium with a possible rocky core.",
      moons: 79,
      notableMoons: "Io, Europa, Ganymede, and Callisto (the Galilean moons)",
    },
    {
      name: "Saturn",
      texture: "saturn.jpg",
      size: 3,
      orbitRadius: 45,
      orbitSpeed: 25,
      rotationSpeed: 0.14,
      distanceFromSun: "1.4 billion km",
      diameter: "116,460 km",
      dayLength: "10.7 hours",
      yearLength: "29.5 Earth years",
      description:
        "Saturn is the sixth planet from the Sun and is famous for its spectacular ring system, which is composed mainly of ice particles with some rocky debris.",
      composition: "Gas giant composed mainly of hydrogen and helium with a possible rocky core.",
      moons: 82,
      notableMoons: "Titan, Enceladus, Mimas, Tethys, Dione, and Rhea",
    },
    {
      name: "Uranus",
      texture: "uranus.jpg",
      size: 2.5,
      orbitRadius: 55,
      orbitSpeed: 30,
      rotationSpeed: 0.12,
      distanceFromSun: "2.9 billion km",
      diameter: "50,724 km",
      dayLength: "17.2 hours",
      yearLength: "84 Earth years",
      description:
        "Uranus is the seventh planet from the Sun and rotates on its side, likely due to a massive collision in its past. It appears blue-green due to methane in its atmosphere.",
      composition: "Ice giant composed of water, methane, and ammonia fluids above a small rocky core.",
      moons: 27,
      notableMoons: "Miranda, Ariel, Umbriel, Titania, and Oberon",
    },
    {
      name: "Neptune",
      texture: "neptune.jpg",
      size: 2.3,
      orbitRadius: 65,
      orbitSpeed: 35,
      rotationSpeed: 0.13,
      distanceFromSun: "4.5 billion km",
      diameter: "49,244 km",
      dayLength: "16.1 hours",
      yearLength: "165 Earth years",
      description:
        "Neptune is the eighth and farthest known planet from the Sun. It's the windiest planet in our Solar System, with winds reaching speeds of 2,100 km/h.",
      composition: "Ice giant composed of water, methane, and ammonia fluids above a small rocky core.",
      moons: 14,
      notableMoons: "Triton, Nereid, and Proteus",
    },
  ]
  
  