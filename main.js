// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");
let arrayList = [];

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  }

  // Output Array as a List
  outputEl.innerHTML = ``;

  for (let i = 0; i < arrayList.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${arrayList[i]}</div>`;
  }

  if (arrayList.length <= 0) {
    outputEl.innerHTML = `<div>Item Placeholder</div>`
  }
}

// Menu Option Functions
function addItem() {
  console.log("Add Item");
  
  let newItem = prompt("Enter Item:");
  arrayList.push(newItem);
}

function removeLast() {
  console.log("Remove Last");

  arrayList.pop();
}

function insert() {
  console.log("Insert");

  let position = +prompt("Insert Position:");
  let newItem = prompt("Item to Insert:");

  arrayList.splice(position - 1, 0, newItem);
}

function removePos() {
  console.log("Remove at Position");

  let position = +prompt("Position to Remove:");

  arrayList.splice(position - 1, 1);
}

function move() {
  console.log("Move");

  let position1 = +prompt("Move item from:");
  let position2 = +prompt("Move item to:");

  let item1 = arrayList[position1];
  let item2 = arrayList[position2];

  arrayList.splice(position2 - 1, 0, item1);
  arrayList.splice(position2, 1);
  arrayList.splice(position1 - 1, 0, item2);
  arrayList.splice(position1, 1);
}

function edit() {
  console.log("Edit");

  let position = +prompt("Enter Position:");
  let newItem = prompt("Replace with:");

  arrayList.splice(position - 1, 0, newItem);
  arrayList.splice(position, 1);
}
