const inputName = document.getElementById('input-name');
const addNameButton = document.getElementById('add-name');
const spinWheelButton = document.getElementById('spin-wheel');
const wheelContainer = document.querySelector('.wheel-container');

let names = [];
let pickedNames = [];

function createWheel() {
    wheelContainer.innerHTML = '';

    for (let i = 0; i < names.length; i++) {
        const div = document.createElement('div');
        div.textContent = names[i];
        div.style.transform = `rotate(${i * (360 / names.length)}deg)`;
        div.style.position = 'absolute';
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        div.style.textAlign = 'center';
        div.style.borderBottom = '1px solid #000';
        div.style.backfaceVisibility = 'hidden';
        div.style.transformStyle = 'preserve-3d';
        div.style.fontSize = '24px';

        wheelContainer.appendChild(div);
    }
}

addNameButton.addEventListener('click', () => {
    if (inputName.value.trim() !== '') {
        names.push(inputName.value.trim());
        inputName.value = '';
        createWheel();
    }
});

spinWheelButton.addEventListener('click', () => {
    if (names.length > 0) {
        let index = Math.floor(Math.random() * names.length);
        pickedNames.push(names[index]);
        names.splice(index, 1);
        createWheel();
        spinWheelButton.textContent = 'Picked Name: ' + pickedNames[pickedNames.length - 1];
    }
});
