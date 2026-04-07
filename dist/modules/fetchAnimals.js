//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar
export default async function fetchAnimals() {
    return fetch("data/data.json")
        .then((response) => response.json())
        .then((data) => {
        data.forEach((animal) => {
            // console.log(`Namn: ${animal.name}`);
            // console.log(`Art: ${animal.kindOfAnimal}`);
            // console.log(`Jobb: ${animal.job}`);
            // if (animal.skills && animal.skills.length > 0) {
            //     console.log(`Färdigheter: ${animal.skills}`);
            // }
            // console.log(`Födelseår: ${animal.birthYear}`);
            // console.log(`Bild-URL: ${animal.imageUrl}`);
            // if (animal.employmentStartDate) {
            //     console.log(`Anställninsdatum: ${animal.employmentStartDate}`);
            // }
            // if (animal.employmentEndDate) {
            //     console.log(`Slutdatum: ${animal.employmentEndDate}`);
            // }
            // console.log("---");
        });
        return data;
    })
        .catch((error) => {
        console.error("Error fetching data:", error);
        return null;
    });
}
