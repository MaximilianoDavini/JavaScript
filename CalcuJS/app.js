const display = document.getElementById("display");
const displayText = document.getElementById("displayText");
const ac = document.querySelector(".ac");
const btn = document.querySelectorAll("button");
const n0 = document.querySelector(".n0");
const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");
const n5 = document.querySelector(".n5");
const n6 = document.querySelector(".n6");
const n7 = document.querySelector(".n7");
const n8 = document.querySelector(".n8");
const n9 = document.querySelector(".n9");
const suma = document.querySelector(".suma");
const resta = document.querySelector(".resta");
const multi = document.querySelector(".multi");
const div = document.querySelector(".div");
const enter = document.getElementById("enter");

ac.addEventListener('click', () => {
    displayText.textContent = "";
});

n0.addEventListener('click', () => {
    displayText.textContent += n0.value;
});
n1.addEventListener('click', () => {
    displayText.textContent += n1.value;
});

n2.addEventListener('click', () => {
    displayText.textContent += n2.value;
});

n3.addEventListener('click', () => {
    displayText.textContent += n3.value;
});

n4.addEventListener('click', () => {
    displayText.textContent += n4.value;
});

n5.addEventListener('click', () => {
    displayText.textContent += n5.value;
});

n6.addEventListener('click', () => {
    displayText.textContent += n6.value;
});

n7.addEventListener('click', () => {
    displayText.textContent += n7.value;
});

n8.addEventListener('click', () => {
    displayText.textContent += n8.value;
});

n9.addEventListener('click', () => {
    displayText.textContent += n9.value;
});

suma.addEventListener('click', () => {
    displayText.textContent += "+"
    select = suma;
});

resta.addEventListener('click', () => {
    displayText.textContent += "-"
    select = resta;
});

multi.addEventListener('click', () => {
    displayText.textContent += "*"
    select = multi;
});

div.addEventListener('click', () => {
    displayText.textContent += "/"
    select = div;
});

enter.addEventListener("click", calcular);

function calcular () {
    displayText.textContent = eval(displayText.textContent);
}