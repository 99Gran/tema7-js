const btn = document.querySelector ("#btn");
const skrift = document.querySelector ("#skrift");
const bilde = document.querySelector ("#bilde");
const nyheter = document.querySelector ("#nyheter");


function visnyhet() {
    nyheter.innerHTML += `
    <article>
        <h1>${skrift.value}</h1>
        <img src="${bilde.value}">
    </article>
`;}

btn.addEventListener("click", visnyhet)