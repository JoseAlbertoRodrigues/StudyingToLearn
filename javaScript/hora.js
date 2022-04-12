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

    msg.innerHTML = `${zero(hora)}:${zero(minutos)}:${zero(segundos)}`
    
    // img.src = 'url(https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80/fotomanha.png)'
    if (hora >= 0 && hora < 12) {
        // Manhã
        img.src = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80"
        // document.body.style.backgroundRepeat = "no-repeat";
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        // img.src = './assets/fototarde.png'
        img.src = "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

    } else {
        // Noite
        // img.src = './assets/fotonoite.png'
        // document.body.style.background = '#515154'
        img.src = "https://images.unsplash.com/photo-1565192167286-5d4298f23aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
        
    }
}

function initTime() {
    setInterval(carregar, 1000)
}
