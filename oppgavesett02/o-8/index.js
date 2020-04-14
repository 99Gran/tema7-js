/*let changeFont = function(font){
    console.log(font.value)
      document.getElementById("inputfont")..style.fontFamily = font.value;
  }*/

  const inputfont = document.querySelector("#inputfont");

  function endreFonttype() {
      document.body.style.fontFamily = inputfont.value;
  }
  
  inputfont.onchange = endreFonttype;