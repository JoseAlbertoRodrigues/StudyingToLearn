function calcular() {
    let txtVel = document.querySelector('#txtVel')
    let res = document.querySelector('div#result')
    let vel = Number(txtVel.value)
    
    let ultrapassou = vel - 60

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Velocidade permitida é <strong>60 Km/h</strong></p>`
        res.innerHTML += `<p>Você esta <strong>MULTADO</strong> por excesso de velocidade.</p>`

        res.innerHTML += `<p>Você excedeu o limite de <strong>${ultrapassou} Km/h</strong></p>`
    }
    res.innerHTML += `<p>Dirija sempre com o cinto de segurança!</p>`
}