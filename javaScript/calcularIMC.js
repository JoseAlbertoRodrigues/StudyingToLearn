function calcular() {
    let ps = document.querySelector('#peso')
    let al = document.querySelector('#altura')
    let res = document.querySelector('#result')
    // console.log(Number(ps.value)) //testar se esta ok
    
    var peso = Number(ps.value)
    var altura = Number(al.value)

    var formula = peso/(altura*altura)
    var imc = formula.toFixed(1)

    if (imc < 17) {
        // Muito abaixo do peso
        res.innerHTML = `<p>&#128557; Sinto muito, mas o seu IMC é de <strong>${imc} kg/m2</strong>, e você precisa ganhar peso.</p>
        <p><strong>Você está muito abaixo do peso.</strong></p>`
    } else if (imc >= 17 && imc < 19) {
        // Abaixo do peso
        res.innerHTML = `<p>&#128542; Sinto muito, seu IMC é de <strong>${imc} kg/m2</strong>, e você precisa ganhar peso.</p>
        <p><strong>Você está abaixo do peso.</strong></p>`
    } else if (imc >= 19 && imc < 25) {
        // Peso normal
        res.innerHTML = `<p>&#128512; Parabéns, seu IMC é <strong>${imc} kg/m2</strong> e você está dentro do peso adequado!</p>
        <p><strong>Peso normal</strong></p>`
    } else if (imc >= 25 && imc < 30) {
        // Acima do peso
        res.innerHTML = `<p> &#128549; Sinto muito, mas o seu IMC é de <strong>${imc} kg/m2</strong>, por isso você está acima do peso.</p>
        <p><strong>Acima do peso.</strong></p>`      
    } else if (imc >= 30 && imc < 35) {
        // Obesidade Grau 1
        res.innerHTML = `<p> &#128542; Sinto muito, mas o seu IMC é de <strong>${imc} kg/m2</strong>, por isso você está acima do peso.</p>
        <p><strong>Obesidade Grau 1</strong></p>`
    } else if (imc >= 35 && imc < 40) {
        // Obesidade Grau 2
        res.innerHTML = `<p> &#128561; Sinto muito, mas o seu IMC é de <strong>${imc} kg/m2</strong>, por isso você está acima do peso.</p>
        <p><strong>Obesidade Grau 2</strong></p>`
    } else {
        // Obesidade Grau 3
        res.innerHTML = `<p> &#128561; &#128561; Sinto muito, mas o seu IMC é de <strong>${imc} kg/m2</strong>, por isso você está acima do peso.</p>
        <p><strong>Obesidade Grau 3</strong></p>`
    }
}

// Colocar isso no JS
// tudo feito em uma só página para ficar mais prático
// devidos a vários conteúdos que estou criando,
// para que eu venha treinar mais para poder aperfeiçoar 


// 16 a 16,9 kg/m² - Muito abaixo do peso
// 17 a 18,4 kg/m² - Abaixo do peso
// 18,5 a 24,9 kg/m² - Peso normal
// 25 a 29,9 kg/m² - Acima do peso
// 30 a 34,9 kg/m² - Obesidade grau I
// 35 a 40 kg/m² - Obesidade grau II
// maior que 40 kg/m² - Obesidade grau III 