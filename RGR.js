let btn = document.querySelector('.clr')
let h = document.querySelector('.hex')
let field = document.querySelector('.h')
let ul_btn = document.querySelector('ul')
let body_back = document.querySelector('body')

let r = document.querySelector('.r')
let g = document.querySelector('.g')
let b = document.querySelector('.b')

const setCol = (e) => {
    let r = + document.querySelector('.r').value
    let g = + document.querySelector('.g').value
    let b = + document.querySelector('.b').value
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

r.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        document.querySelector('.clr').click();
    }
});

g.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        document.querySelector('.clr').click();
    }
});

b.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        document.querySelector('.clr').click();
    }
});

btn.onclick

field.onclick = function (event) {
    document.querySelector('.clr').click();
}

field.oncontextmenu = function (event) {
    let r = + document.querySelector('.r').value
    let g = + document.querySelector('.g').value
    let b = + document.querySelector('.b').value
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
    document.querySelector('.txt').style.color = "#" + r + g + b;
}

ul_btn.onclick = function (event) {
    let clrclr = event.target.style.background
    document.querySelector('body').style.background = clrclr;
}

body_back.onclick = function (event) {
    document.querySelector('body').style.background = rgb(255, 244, 227);
}


// let arr = ['00', '33', '66', '99', 'CC', 'FF']

// const combine = (arr, k, withRepetition = false) => {
//     const combinations = []
//     const combination = Array(k)
//     const internalCombine = (start, depth) => {
//         if (depth === k) {
//             combinations.push([...combination])
//             return
//         }
//         for (let index = start; index < arr.length; ++index) {
//             combination[depth] = arr[index]
//             internalCombine(index + (withRepetition ? 0 : 1), depth + 1)
//         }
//     }
//     internalCombine(0, 0)
//     return combinations
// }

// const combinations = combine(arr, 3)
// console.log({ combinations: combinations.map(c => c.join()) })