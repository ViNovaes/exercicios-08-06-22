

//exercicio de Km


let distancia = prompt ("Digite aqui sua distancia percorrida")
let combustivel = prompt ("Digite aqui o combustivel gasto")
const consumo = distancia / combustivel
alert ("Seu consumo total é de " +consumo.toFixed(3)+ "KM/l" )


//exercicio mes do ano

let numero = prompt ("Digite seu numero do mês aqui")
if (numero == 1){
    alert ("Janeiro")
}
else if (numero == 2){
    alert ("fevereiro")
}
else if (numero == 3){
    alert ("Março")
}
else if (numero == 4){
    alert ("Abril")
}
else if (numero == 5){
    alert ("Maio")
} 
else if (numero == 6){
    alert ("Junho")
} 
else if (numero == 7){
    alert ("Julho")
} 
else if (numero == 8){
    alert ("Agosto")
} 
else if (numero == 9){
    alert ("Setembro")
} 
else if (numero == 10){
    alert ("Outubro")
} 
else if (numero == 11){
    alert ("novembro")
} 
else if (numero == 12){
    alert ("Dezembro")
} 
else {
Alert ("Numero invalido")
}



//Exercicio salario

let nome = prompt ("Digite seu nome aqui")
let salario = prompt ("Digite aqui seu salario")
let vendas = prompt ("Digite aqui o total de vendas")
const comissao = parseFloat(vendas) * parseFloat(0.15)
const salarioTotal = parseFloat(comissao) + parseFloat(salario)
alert (nome+ " seu salario total é " + salarioTotal.toFixed(2))

