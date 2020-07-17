const sliderJS = () => {
  const person = Array.from(document.querySelectorAll(".person"));
  const personPosition = person[0].getBoundingClientRect().width;
  const personButtons = Array.from(
    document.querySelectorAll(".person-buttons")
  );

  // Displaing all images next to each other
  const setPersonPosition = (person, personPosition) => {
    person.forEach((element, index) => {
      element.style.left = `${personPosition * index}px`;
    });
  };

  // Display right card with person
  const displayPerson = (person, index) => {
    const posPerson = person[index].style.left;
    person.forEach((item) => {
      item.classList.remove("active-person");
      item.style.transform = `translateX(-${posPerson})`;
      setPersonPosition(person, personPosition);
    });
    person[index].classList.add("active-person");
    person[index].style.transform = `translateX(-${posPerson})`;
  };

  //  Set buttons for a person
  const setPersonButton = (e) => {
    const currentButton = e.target;

    // Array for removing class from all buttons
    Array.from(currentButton.parentElement.children).forEach((item) => {
      item.classList.remove("active-slide");
    });

    // Add class to actual clicked button
    currentButton.classList.add("active-slide");
  };

  // Find index of clicked button
  const index = (personButtons) => {
    const findIndex = personButtons.findIndex((i) =>
      i.classList.contains("active-slide")
    );
    return findIndex;
  };

  // Setting images next to each other
  setPersonPosition(person, personPosition);

  // Listener for click buttons
  personButtons.forEach((item) =>
    item.addEventListener("click", (e) => {
      setPersonButton(e);
      displayPerson(person, index(personButtons));
    })
  );
};
