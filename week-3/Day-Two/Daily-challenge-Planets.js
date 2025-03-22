const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "blue", moons: 14 }
];

const section = document.querySelector(".listPlanets");

planets.forEach(planet => {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    
    if (planet.moons > 0) {
        for (let i = 0; i < planet.moons; i++) {
            const moonDiv = document.createElement("div");
            moonDiv.classList.add("moon");
            moonDiv.style.marginLeft = `${i*10}px`; // additional for me to see the number of moon!
            planetDiv.appendChild(moonDiv);
        }
    }

    section.appendChild(planetDiv);
});
