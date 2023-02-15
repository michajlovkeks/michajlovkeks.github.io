let btn = document.querySelector('.submit')
let btn2 = document.querySelector('.reset')
let field = document.querySelector('.color')
let field2 = document.querySelector('.color_div2')

const setCol = (e) => {
    let clr = document.querySelector('.color').value

    field2.style.backgroundColor = clr;
}

btn.addEventListener("click", setCol);

const setCol2 = (e) => {
    field2.style.backgroundColor = "#222222";
}

btn2.addEventListener("click", setCol2);