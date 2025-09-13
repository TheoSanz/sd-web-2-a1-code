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

const broken = [
  { id: 1, name: "Billy", age: 19 },
  { id: 2, age: 45 },
  { id: 3 },
  { id: 4, name: "Mr. Cheez", age: 65 },
  { id: 5, name: "Blawg", age: 0 },
  { id: 6, name: "", age: 67 },
];

const errorElement = document.getElementById("error-messages");
const errorHandling = document.getElementById("error-handling-list");

function renderList(array, elementId) {
  const listEl = document.getElementById(elementId);
  if (!listEl) return;

  listEl.innerHTML = "";

  array.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.name;
    listEl.appendChild(li);
  });
}

function namesList(arrayName, listElement, errorDiv = errorElement) {
  listElement.innerHTML = "";
  if (errorDiv) errorDiv.innerHTML = "";

  arrayName.forEach((object) => {
    if (!object.name) {
      let errorMessage =
        `Error!!!!!! \nThe object: ${JSON.stringify(object, null, 2)} \n` +
        `is missing a "name" property!!!!`;

      console.error(errorMessage);

      const errorInfo = document.createElement("li");
      errorInfo.id = "failed-objects";
      errorInfo.textContent = errorMessage;
      listElement.append(errorInfo);
    } else {
      const item = document.createElement("li");
      item.id = "passed-objects";
      item.textContent = object.name;
      listElement.append(item);
    }
  });
}

namesList(broken, errorHandling, errorElement);
renderList(users, "names-list"); 
