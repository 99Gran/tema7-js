const green= document.querySelector ("#green")
const inpX= document.querySelector ("#inpX")
const inpY= document.querySelector ("#inpY")
const inpBredde = document.querySelector("#inpBredde")
const inpHoyde = document.querySelector("#inpHoyde")
const inpBorderradius = document.querySelector("#inpBorderradius")


function skaler() {
    const bredde = Number(inpBredde.value)
    const hoyde = Number(inpHoyde.value)
    
    green.style.width = `${bredde}px`
    green.style.height = `${hoyde}px`
}


function beveg (){
    
    const left = Number(inpX.value)
    const top = Number(inpY.value)        
    
    green.style.left = `${left}px`;
    green.style.top = `${top}px`;
    
}

function rundav() {
    const avrund = Number(inpBorderradius.value)
    green.style.borderRadius = `${avrund}%`
}

inpX.oninput = beveg;
inpY.oninput = beveg;

inpHoyde.oninput = skaler;
inpBredde.oninput = skaler;

inpBorderradius.oninput = rundav;