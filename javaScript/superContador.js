// let é mais para escopo
function contar() {
    let inicio = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let result = document.querySelector('#result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        result.innerHTML = 'Impossível contar!'
        //alert('[ERRO] impossivel contar!')
    } else {
        result.innerHTML = `<h2>Contador:</h2> <br>`
        let i = Number(inicio.value) // inicio
        let f = Number(fim.value) // fim
        let p = Number(passo.value) // passo.value

        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem cressente
            for(let c = i; c <= f; c += p) {
                result.innerHTML += ` ${c} \u{1F449}`
            }
            result.innerHTML += ` \u{1F3C1}`
        } else {
            // Contagem decressente
            for(let c = i; c >= f; c -= p) {
                result.innerHTML += ` ${c} \u{1F449}`
            }
            result.innerHTML += ` \u{1F3C1}`
        }
    }
}

// var total = 2
// var num = 5
// while (total < 12) {
//     console.log(`Total = ${total}`)
//     console.log(`entre com um numero: ${num}`)

//     total += num
// }
// console.log(`final total = ${total}`)


// var i
// var ini = 1
// var fim = 10
// var passo = 2
// for (i = ini; i < fim; i++) {
//     console.log(`${i} +`)
// }
// console.log('fim')


// var c = 0
// var n1 = 1
// var n2 = 10
// for (c = n1; c <= n2; c++) {
//     console.log('Este é ' + c)
//     //console.log('este é c: ' + c)
// }

// var menor = 1
// var  fim = 10
// var melhor = []
// var passos = 1
// var output
// var i 
// for (i = menor; i < fim; i++) {
//     // output = 'solucao #' +  i + ' score: ' + passos
//     // console.log(output) // posso retirar depois
//     output = i + passos
//     melhor = melhor + (i + output + ' + ')
//     console.log(`${i} + ${melhor}`)
// }
// console.log('teste: ' + fim)
// console.log('solucao: ' + menor)


// // for (i = 0; i < fm; i++) {
// //     if (fm == maior) {
// //         melhor = melhor + (fm + passos + ' + ') 
// //     }
// // }
// console.log('melhor: ' + melhor + 'fim!')