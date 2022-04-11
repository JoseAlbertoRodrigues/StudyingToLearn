function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formularioAno = document.querySelector('#txtano')
    let res = document.querySelector('div#result')
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // posição do sexo [0][1]
        var idade = ano - Number(formularioAno.value)

        // Criando um atributo para o elemento <img>
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ''
        if (fsex[0].checked) { // SEXO Masculino
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './assets/foto-bebe-homem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/foto-jovem-homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './assets/foto-adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute('src', './assets/foto-idoso-homem.png')
            }

        } else if (fsex[1].checked) { // SEXO Feminino
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './assets/foto-bebe-mulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/foto-jovem-mulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './assets/foto-adulto-mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', './assets/foto-idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
        // adicionar um elemento
        res.appendChild(img)
    }
}