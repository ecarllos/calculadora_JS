let res = document.getElementById("res")
let valor = []

function MostrarNumero(n){
    valor += n
    res.innerHTML = valor
}

function operacoes(n){
    valor += n
    res.innerHTML = valor
}

function calcular(){
    let resultado = eval(valor)
    res.innerHTML = resultado
    valor = resultado.toString()
}

function LimparNumero(){
    let ultimoN = valor[valor.length - 1]
    valor.splice(2, 1)
}