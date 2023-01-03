const button = document.querySelector('button');
const input = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
    const text = input.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = text;
    listEl.appendChild(listItemEl);
}

button.addEventListener('click', addGoal)