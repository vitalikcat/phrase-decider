"use strict";

const phrases = [
  "Thats sounds good",
  "Yes, you should definitely do that",
  "I'm not sure that's a great idea",
  "Maybe not today?",
  "Computer says no",
];

const randomIndex = Math.floor(Math.random() * 5);

// Мені слід випити ще один мілк-шейк?
// Мені з'їсти один блинець?
console.log(phrases[randomIndex]);
