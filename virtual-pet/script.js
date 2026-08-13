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

function updatePet() {
    console.log("Pet happiness:", happiness);
}
