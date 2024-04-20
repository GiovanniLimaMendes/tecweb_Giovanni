function calcularDesconto(){
    let valorCompra = parseFloat(document.getElementById("valor").value);
    
    if (valorCompra > 100){
        let valorDesconto = valorCompra * 0.1;
        valorCompra -= valorDesconto;
        document.getElementById("resultado").innerHTML = "Você recebeu um desconto de: R$" + valorDesconto + " O valor da sua compra com desconto é de R$" + valorCompra;
    } else{
        document.getElementById("resultado").innerHTML = "Valor sem desconto de: R$ " + valorCompra;
    }
}