let a = document.getElementById('area')
let full = document.querySelector('#fullScreen')


a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

full.addEventListener('mouseenter', mouseEnter)
full.addEventListener('mouseout', mouseOut)
full.addEventListener('click', clicou)


function clicar() {
    a.innerText = "Clicou!" 
    a.style.background = "pink"
}

function entrar() {
    a.innerText = "Entrar!"
    a.style.background = "green"
}

function sair() {
    a.innerText = "Sair!"
    a.style.background = "blue"
}

function mouseEnter() {
    full.innerText = "Mouse Out"
    full.style.background = "purple"
}

function mouseOut() {
    full.innerText = "Mouse Enter"
    full.style.background = "red"
}

function clicou() {
    full.innerText = "Você clicou aqui!"
    full.style.background = "gold"
    full.style.fontSize = 3 + "em"        
}