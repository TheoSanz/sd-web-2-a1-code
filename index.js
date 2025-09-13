const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

const brokenUsers = [
  { id: 1, age: 23 }, // missing name
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, age: 23 }, // missing name
];

function renderList(array, elementId, ageThreshold = null, errorDivId = "error-messages") {
  const listElement = document.getElementById(elementId);
  const errorsDiv = document.getElementById(errorDivId);

  if (listElement) listElement.innerHTML = "";
  if (errorsDiv) errorsDiv.innerHTML = "";

  array.forEach(obj => {
    if (!obj.name || obj.name.trim() === "") {
      const errorMsg = `Error!!!!!!\nThe object: ${JSON.stringify(obj, null, 2)}\n` +
        `is missing a "name" property!!!!`;
      console.error(errorMsg);

      if (errorsDiv) {
        const li = document.createElement("li");
        li.id = "failed-objects";
        li.textContent = errorMsg;
        errorsDiv.appendChild(li);
      }
      return;
    }

    if (ageThreshold === null || obj.age < ageThreshold) {
      console.log(obj.name);
      const li = document.createElement("li");
      li.id = "passed-objects";
      li.textContent = obj.name;
      listElement.appendChild(li);
    }
  });
}

renderList(users, "names-list");                     // Exercise 1
renderList(brokenUsers, "error-handling-list");      // Exercise 5
