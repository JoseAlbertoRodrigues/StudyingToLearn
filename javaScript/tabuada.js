function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0) {
        alert('Por favor. Digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // antes de começar a tabuada ele limpa a tabuada
        while (c <= 10) {
            // Criando um elemento do JavaScript qualquer que seja..para o HTML
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` // Parte de dentro do option 
            item.value = `tab${c}` // Vai ser melhor para linguagem tipo PHP.. para saber qual foi o item selecionado
            tab.appendChild(item) // Para fazer aparecer o resultado
            c++
        }
    }
}




// var numero = 5
// var contador = 0
// var resultado

// var contador = 0
//     var resultado
//     res.innerHTML = `Digite um número acima <br>`

//     if (numero.value.leng == ''){
//         alert('Por favor. Digite um número!')
//     } else {
//         for(contador = 0; contador <= 10; contador++) {
//             num = Number(numero.value)
//             resultado = num * contador
//             res.innerHTML += `${num} x ${contador} = ${resultado} <br>` 
//         }
//     }

// for (contador = 0; contador <= 10; contador++) {
//     // var n1 = numero
//     // var c = contador
//     // var r = resultado
//     resultado = numero * contador
//     console.log(`${numero} x ${contador} = ${resultado}`)    
// }
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15