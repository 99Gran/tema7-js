
const inpFontsize = document.querySelector("#inpFontsize");

function endreFontsize() {
    document.body.style.fontSize = inpFontsize.value;
}

inpFontsize.onchange = endreFontsize;



const inpFonttype = document.querySelector("#inpFonttype");

function endreFonttype() {
    document.body.style.fontFamily = inpFonttype.value;
}

inpFonttype.onchange = endreFonttype;



const inpSkriftfarge = document.querySelector("#inpSkriftfarge");

function endreFontfarge() {
    document.body.style.color = inpSkriftfarge.value;
}

inpSkriftfarge.onchange = endreFontfarge;



const backgroundColor = document.querySelector("#backgroundColor");

function endreFarge() {
    document.body.style.backgroundColor = backgroundColor.value;
}

backgroundColor.onchange = endreFarge;
