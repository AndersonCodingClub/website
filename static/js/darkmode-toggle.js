try {
    console.log(state)
} catch (ReferenceError) {
    var state = 0;
}
var original = window.getComputedStyle( document.body ,null).getPropertyValue('background');  
textArr = document.getElementsByClassName("unset-a option-text")
textArr = Array.prototype.slice.call(textArr);
var logoOriginial = document.getElementsByClassName("logo")[0].style.filter
var matrixInterval = null;
if (document.getElementById('canv') == null){
    var foo = document.createElement("canvas");
    document.body.prepend(foo);
    foo.setAttribute("id","canv");
    foo.setAttribute("style", "display: none;")
}
function darkmode() {
    var check = document.getElementById("darkmode-toggle");
    const canvas = document.getElementById('canv');
    canvas.style.display = "none"
    if (check.checked) {
        canvas.style.display = "block"
        document.body.style.transition = "2s";
        document.body.style.background = "black";
        document.getElementsByClassName("logo")[0].style.filter = "brightness(100)"
        if (state !== 2){
            if (state !== 1){
                textArr.forEach( function(element){
                    element.style.color = 'white'; 
                });
            }
            if (matrixInterval == null){
                matrixInterval = setInterval(matrix, 30);
            }
        }
    } else {
        document.getElementsByClassName("logo")[0].style.filter = logoOriginial
        document.body.style.background = original
        if (state !== 2){
            if (state !== 1){
                textArr.forEach( function(element){
                    element.style.color = 'black'; 
                });
            }
            clearInterval(matrixInterval)
            matrixInterval = null
        }
    }
}