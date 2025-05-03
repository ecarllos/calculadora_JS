let res = document.getElementById("res")
let valor = []
resultado = ''

function operacoes(n){
    valor.push(n)
    res.innerHTML = valor.join('')
}

function calcular(){
    resultado = eval(valor.join(''))
    res.innerHTML = resultado
    resultado.toString().split('')
    console.log(resultado)
    valor = [resultado]
    
}

function LimparNumero(){
    valor.pop()
    res.innerHTML = valor.join('')
}
function LimparTela(){
    res.innerHTML = ''
    valor = []

}
function test(){
    console.log(resultado)
}
