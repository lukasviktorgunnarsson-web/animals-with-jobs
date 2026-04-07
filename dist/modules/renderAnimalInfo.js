export default function renderAnimalInfo(animal) {
    const infoDiv = document.querySelector(".animal-info");
    if (!infoDiv)
        return;
    infoDiv.replaceChildren();
    //Få fram bilden på djuret
    const image = document.createElement("img");
    image.src = "/images/" + animal.imageUrl;
    image.alt = `${animal.name}`;
    infoDiv.appendChild(image);
    // Namn på djuret och typ av djur
    const name = document.createElement("h2");
    name.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    infoDiv.appendChild(name);
    // Egenskaper 
    const list = document.createElement("div");
    infoDiv.appendChild(list);
    // Jobb och anställningsstatus
    const job = document.createElement("ul");
    job.classList.add("job-info");
    job.textContent = `${animal.job} - Currently ${animal.employmentEndDate ? "not " : ""}employed`;
    list.appendChild(job);
    // Ålder
    const ageDiv = document.createElement("div");
    ageDiv.classList.add("age-div");
    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(animal.birthYear);
    const age = currentYear - birthYear;
    const ageItem = document.createElement("p");
    ageItem.classList.add("age-info");
    // ageItem.textContent = `Age: ${age} years old.`;
    ageItem.textContent = `Age:`;
    const ageValue = document.createElement("span");
    ageValue.classList.add("age-value");
    ageValue.textContent = `${age} years old.`;
    ageItem.appendChild(ageValue);
    list.appendChild(ageItem);
    if (animal.skills) {
        const skillsTitle = document.createElement("ul");
        skillsTitle.classList.add("skills-info");
        skillsTitle.textContent = "Skills:";
        list.appendChild(skillsTitle);
        const skillsUl = document.createElement("ul");
        skillsUl.classList.add("skills-info");
        const skillsArray = Array.isArray(animal.skills) ? animal.skills : [animal.skills];
        skillsArray.forEach((skill) => {
            if (skill && skill.trim().length > 0) {
                const li = document.createElement("li");
                li.textContent = skill;
                skillsUl.appendChild(li);
            }
        });
        if (skillsUl.childElementCount > 0) {
            list.appendChild(skillsUl);
        }
    }
    // if (animal.skills && Array.isArray(animal.skills)) {
    //   const skillsTitle = document.createElement("p");
    //   skillsTitle.textContent = "Färdigheter:";
    //   list.appendChild(skillsTitle);
    //   const skillsUl = document.createElement("ul");
    //   skillsUl.classList.add("skills-info");
    //   animal.skills.forEach((skill) => {
    //     const li = document.createElement("li");
    //     li.textContent = skill; 
    //     skillsUl.appendChild(li);
    //   });
    //   list.appendChild(skillsUl);
    // }
    //   if (animal.skills && Array.isArray(animal.skills)) {
    //   const skillsUl = document.createElement("ul");
    //   skillsUl.classList.add("skills-info");
    //   skillsUl.textContent = `Färdigheter: `;
    //   const skillsLi = document.createElement("li");
    //   skillsLi.textContent = `${animal.skills.join(", ")}`;
    //   skillsUl.appendChild(skillsLi);
    //   list.appendChild(skillsUl);
    // } 
    // else if (animal.skills) {
    //   const skillsUl = document.createElement("ul");
    //   skillsUl.classList.add("skills-info");
    //   skillsUl.textContent = `Färdigheter: `;
    //   const skillsLi = document.createElement("li");
    //   skillsLi.textContent = `${animal.skills}`;
    //   skillsUl.appendChild(skillsLi);
    //   list.appendChild(skillsUl);
    // }
    //=====================================================//
    //Rendera ut bilden på djuret
    //Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
    //=====================================================//
    //=====================================================//
    //Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
    //Följ formatet: "Trash Analyst - Currently (not) employed"
    //Använd template literals
    //=====================================================//
    //=====================================================//
    //Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
    //Följ formatet:  Age: 9 years old.
    //Använd template literals
    //Bonus om du skriver ut rubriken "Age" med CSS.
    //=====================================================//
    //=====================================================//
    //Skriv ut en lista på djurets färdigheter
    //Följ formatet:    Skills:
    //                  Flying
    //                  Eating
    //Bonus om du skriver ut rubriken "Skills" med CSS.
    //=====================================================//
}
