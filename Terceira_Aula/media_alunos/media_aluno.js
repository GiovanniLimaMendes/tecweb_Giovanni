function calcularMedia(){
    const nomeAluno = document.getElementById("nomeAluno").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    media = (nota1 + nota2)/2;

    console.log("Sua média foi de: " + media);

    if (media >= 7){
        alert("O aluno " + nomeAluno + " obteve média = " + media + "\n Resultado: Aprovado");
    } else{
        alert("O aluno " + nomeAluno + " obteve média = " + media + "\n Resultado: Reprovado");
    }
}