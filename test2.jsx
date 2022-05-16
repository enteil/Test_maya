"use strict";

const fs = require("fs");

let inventory = [];

function add(name) {
  if (name && typeof name == "string") {
    if (inventory.find((i) => i === name)) {
      return;
    } else {
      inventory.push(name);
    }
    return;
  }
}
function remove(name) {
  if (inventory.find((i) => i === name)) {
    inventory.splice(
      inventory.findIndex((i) => {
        return i === name;
      }),
      1
    );
  }
  return;
}
function getList() {
  if (inventory.length) {
    console.log(inventory.map((i) => i));
  } else {
    console.log("No items");
  }
}

function main() {
  getList();
  add("leo");

  getList();
  add("leo");
  add("maya");

  getList();
  remove("leo");

  getList();
  remove("leo");
}

main();
