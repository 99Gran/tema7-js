/*const forrett = prompt("Hva vil du ha til forrett?");
const hovedrett = prompt("Hva vil du ha til hovedrett?");
const dessert = prompt("Hva vil du ha til dessert?");

document.write('<ul>')
document.write('<li>')
document.write("Fiskeboller")
document.write('</li>')
document.write('<li>')
document.write(forrett)
document.write('</li>')
document.write('<li>')
document.write(hovedrett)
document.write('</li>')
document.write('<li>')
document.write(dessert)
document.write('</li>')
document.write('</ul>')*/

const middag = document.querySelector("#middag");
const inpMatrett = document.querySelector("#inpMatrett");

function leggTilMatrett() {
    middag.innerHTML += `<li>${inpMatrett.value}</li>`;
}

inpMatrett.onchange = leggTilMatrett;