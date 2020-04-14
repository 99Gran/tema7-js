const fornavn = prompt ("Skriv inn fornavnet ditt:");
const etternavn = prompt ("Skriv inn etternavnet ditt:");
const stilling = prompt ("Skriv inn stillingen din:");
const url = prompt("Velg deg et bilde.")

document.write(`
    <article>
        <h1>${fornavn} ${etternavn}</h1>
        <p><b>Stilling: </b>${stilling}</p>
        <img src="${url}" style="width: 300px">
    </article>
`)