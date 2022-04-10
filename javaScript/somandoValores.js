function somar() {
    let tn1 = document.querySelector('input#txtn1')
    let tn2 = document.querySelector('input#txtn2')
    let result = document.querySelector('#result')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)

    let sum = n1 + n2

    result.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${sum}</strong>`
}