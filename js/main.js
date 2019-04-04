'use strict';
let name = 'Dima';
let age = 18;
let isConfirmed;

function askName() {
    while (name) {
        name = prompt('Whats your name?', `${name}`);
        if (name.replace(/[a-zA-Zа-яА-Я]/g, "").length || name === "") {
            alert('Please write only letters!');
        } else return;
    }
}

function askAge() {
    while (age) {
        age = prompt('How old are you?', `${age}`);
        if (age.replace(/[^a-zA-Zа-яА-Я]/g, '').length || age === "" || age[0] === '0') {
            alert('Please write only numbers!');
        } else return;
    }
}

function main() {
    askName();
    askAge();

    while (age && name) {
        if (age < 5) {
            alert('Write your real age!');
            askAge();
        } else if (age >= 5 && age < 18) {
            alert('You are not allowed to visit this website!');
            return;
        } else if (age >= 18 && age <= 22) {
            isConfirmed = confirm('Are you sure you want to continue?');
            if (isConfirmed) {
                alert(`Welcome, ${name}!`);
                return;
            } else {
                alert('You are not allowed to visit this website.');
                return;
            }
        } else if (age > 22 && age <= 85) {
            alert(`Welcome, ${name}`);
            return;
        } else if (age > 85) {
            alert(`Good for you, ${name}!`);
            return;
        }
    }
}
main();