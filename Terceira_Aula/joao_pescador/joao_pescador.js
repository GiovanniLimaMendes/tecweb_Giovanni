function calcularRendimento(){
    const pesoPeixes = parseFloat(document.getElementById("pesoPeixes").value);

    if (pesoPeixes > 50){
        excesso = pesoPeixes - 50;
        multa = excesso * 4;

        alert("O peso de peixes é maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo excedente. \n Você trouxe o total de: " + pesoPeixes + " quilos, o valor da multa é de: R$" + multa);
    } else{
        alert("O peso de peixes está dentro do limite estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos). \n Você trouxe o total de: " + pesoPeixes);
    }
}