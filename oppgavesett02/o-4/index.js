const inputX = document.querySelector ("#inputX")
const inputY = document.querySelector ("#inputY")
const abs = document.getElementById("pos")

abs.style.backgroundColor = "red";
abs.style.width = "50px";
abs.style.height = "50px";

function move (){
    const left = Number(inputX.value)
    const top = Number(inputY.value)

    abs.style.left = `${left}px`;
    abs.style.top = `${top}px`;
}

inputX.oninput = move;
inputY.oninput = move;