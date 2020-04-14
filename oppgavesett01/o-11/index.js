const prisumoms = Number( prompt("Hva er prisen") );
const moms = prisumoms * 0.25;
const total = prisumoms + moms;

document.write(`
    <p>Pris uten moms: ${prisumoms}</p>
    <p>Moms: ${moms}</p>
    <p>Pris med moms: ${total}</p>
`)