//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter
import renderAnimalInfo from "./renderAnimalInfo.js";
export default function renderListOfAnimals(animals) {
    const animalList = document.querySelector(".list-of-animals ul");
    if (!animalList)
        return;
    animalList.innerHTML = "";
    animals.forEach((animal) => {
        const li = document.createElement("li");
        li.classList.add("animal-list");
        li.textContent = animal.name;
        animalList.appendChild(li);
        li.addEventListener("click", () => {
            console.log(`Clicked on ${animal.name}`);
            renderAnimalInfo(animal);
        });
    });
}
