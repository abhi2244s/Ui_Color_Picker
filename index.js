let id = document.getElementById('cont1')
id.addEventListener('click',red)
function red(){
    id.style.backgroundColor = "#FF6263"
    console.log(id.style.backgroundColor)
    let store = navigator.clipboard.writeText(id.style.backgroundColor);

    let p = document.getElementById('para1')
    p.innerHTML = "Copied ";
    p.addEventListener('click',para1)
}

let id1 = document.getElementById('cont2')

function red1(){
    id1.style.backgroundColor = "#DE4839";
    let store = navigator.clipboard.writeText(id1.style.backgroundColor);

    let p1 = document.getElementById('para2')
    p1.innerHTML = "Copied";
    p1.addEventListener('click',para2)
}

function para1(){
    let p = document.getElementById('para1')
     p.textContent = "#FF6263"
}
function para2(){
    let p = document.getElementById('para2')
     p.textContent = "#DE4839"
}
let id2 = document.getElementById('cont3')

function red2(){
    id2.style.backgroundColor = "#BF3325";

    let store = navigator.clipboard.writeText(id2.style.backgroundColor);
    let p2 = document.getElementById('para3')
    p2.innerHTML = "Copied"
    p2.addEventListener('click',para3)
}
function para3(){
    let p = document.getElementById('para3')
    p.textContent = "#BF3325"
}

let id3 = document.getElementById('cont4')
function red3(){
    id3.style.backgroundColor = "#E21717"

    let store = navigator.clipboard.writeText(id3.style.backgroundColor)

    let p3 = document.getElementById('para4')
    p3.innerHTML = "Copied"
    p3.addEventListener('click',para4)
}
function para4(){
    let p = document.getElementById('para4')
    p.textContent = "#E21717"
}

let id4 = document.getElementById('cont4')

function red4(){
    id4.style.backgroundColor = '#BF3312'

    let store = navigator.clipboard.writeText(id4.style.backgroundColor)

    let p4 = document.getElementById('para5')
    p4.innerHTML = "Copied"
    p4.addEventListener('click',para5)
}
function para5(){
    let p = document.getElementById('para5')
    p.textContent = "#BF3312"
}
