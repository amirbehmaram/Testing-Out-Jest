import DomManipulation from "./assets/scripts/DomManipulation.js";

document.addEventListener("DOMContentLoaded", (event) => {
  let events = new DomManipulation();
  events.addEvents();

  console.log("Hi");
});
