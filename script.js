let res = document.getElementById("res")
let valor = []
let resultado = []

function MostrarNumero(n){
    valor += n
    res.innerHTML = valor
}

function operacoes(n){
    valor += n
    res.innerHTML = valor
}

function calcular(){
    resultado = eval(valor)
    res.innerHTML = resultado
    valor = resultado.toString()
}

function LimparNumero(){
    let ultimoN = valor[valor.length - 1]
    // valor.splice(ultimoN, 1)
    res.innerHTML = valor
}
function LimparTela(){
    res.innerHTML = ''
    valor = ''

}
function test(){
    console.log(resultado)
}
