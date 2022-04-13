// let num = document.getElementById('fnum')
// let lista = document.getElementById('flista')
// let res = document.getElementById('res')

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let result = document.querySelector('div#result')
let valores = [] // Lista de valores

// números entre 1 e 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// receber um número e vetor dos valores
function inLista(n, l) {
    // if o Valor não foi encontrado na lista
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    // se o valor que está aqui dentro É NÚMERO && e vai adicionar se não estiver EM LiSTA
    // Só vai adicionar se os dois forem verdades
    if(isNumero(num.value) && !inLista(num.value, valores)) {

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        result.innerHTML = '' // limpa o resultado (res) quando adiciona o elemento
    } else {
        alert('Valor inválido ou já encontrando na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            } if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / tot

        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo temos ${tot} número cadastrados.</p>`
        result.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        result.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        result.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        result.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}