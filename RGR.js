let btn = document.querySelector('.clr')
let h = document.querySelector('.hex')
let field = document.querySelector('.h')

const setCol = (e) => {
    let r =+ document.querySelector('.r').value
    let g =+ document.querySelector('.g').value
    let b =+ document.querySelector('.b').value
    r = r.toString(16)
    g = g.toString(16)
    b = b.toString(16)
    if (r.length < 2) {
        r = "0" + r;
    }
    if (g.length < 2) {
        g = "0" + g;
    }
    if (b.length < 2) {
        b = "0" + b;
    }
    h.innerHTML = "#" + r + g + b;
    field.style.background = "#" + r + g + b;
}

btn.addEventListener("click", setCol);

let r = document.querySelector('.r')
let g = document.querySelector('.g')
let b = document.querySelector('.b')

r.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        document.querySelector('.clr').click();
    }
});

g.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        document.querySelector('.clr').click();
    }
});

b.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        document.querySelector('.clr').click();
    }
});

field.onclick = function (event) {
    document.querySelector('.clr').click();  
}