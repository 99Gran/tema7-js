const url = prompt("Velg deg et bilde.")
const style = prompt("Velg størrelsen på bildet")
const title = prompt("Velg tittle på bildet")

document.write(`
    <img
        src="${url}"
        style="width: ${style}px"
        title="${title}"
    >
`)