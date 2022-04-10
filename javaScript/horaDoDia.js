function carregar() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#image')
    
    let agora = new Date()
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    function zero(n) {
        return ('0' + n).slice(-2)
    }

    msg.innerHTML = `Agora são ${zero(hora)}:${zero(minutos)}:${zero(segundos)} horas.`

    if (hora >= 0 && hora < 12) {
        // Manhã
        img.src = './assets/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        img.src = './assets/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // Noite
        img.src = './assets/fotonoite.png'
        document.body.style.background = '#515154'
    }
}

function initTime() {
    setInterval(carregar, 1000)
}