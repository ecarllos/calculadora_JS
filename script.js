let res = document.getElementById("res")
let valor = []
resultado = ''

function operacoes(n){
    valor.push(n)
    res.innerHTML = valor.join('')
}

function calcular(){
    if (valor.length == 0){
        alert("digite um número!")
    }else{
        let expressao = valor.join('')
        let resultadoNumerico = eval(expressao)

        res.innerHTML = resultadoNumerico

        valor = resultadoNumerico.toString().split('').map(Number);        
    }

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
