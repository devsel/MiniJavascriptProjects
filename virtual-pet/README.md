# 🎮 Mini JavaScript Projects

A collection of small and fun JavaScript projects designed to learn programming through interactive mini-games.

The goal is simple:

> **You don't just write JavaScript. You build something people can play. 🚀**

---

## 🐶 Project 1 – Virtual Pet

### 🎯 About the Game

In this mini-game, you take care of a virtual pet.

The player can:

- 🍎 Feed the pet
- 🎾 Play with the pet
- 😴 Let the pet sleep
- 😊 Increase the pet's happiness

The pet's expression changes depending on its happiness level.

### 🧠 JavaScript Concepts

This project demonstrates:

- Variables
- Functions
- Events
- `onclick`
- DOM manipulation
- `if / else`
- Increment operators
- Updating HTML dynamically

### 💻 Example

```javascript
let happiness = 50;

function feedPet() {
    happiness += 10;
    updatePet();
}

function playPet() {
    happiness += 5;
    updatePet();
}

function sleepPet() {
    happiness += 3;
    updatePet();
}
