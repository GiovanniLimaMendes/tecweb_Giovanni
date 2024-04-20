function calcularMedia(){
    let nomeAluno = document.getElementById("nomeAluno").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    let media = (nota1 + nota2)/2;

    if (media >= 7){
        exibirResultado(nomeAluno, media, "Aprovado");
    } else{
        alert("Você não atingiu a média, porém ainda à chances \n Insira a nota da recuperação.");
        solicitarRecuperacao(nomeAluno, media);
    }
}

function solicitarRecuperacao(nome, mediaInicial){
    let recuperacao = parseFloat(document.getElementById("recuperacao").value);
    let mediaFinal = (recuperacao + mediaInicial)/2;

    if (mediaFinal >= 5){
        exibirResultado(nome, mediaFinal, "Aprovado na recuperação");
    } else{
        exibirResultado(nome, mediaFinal, "Reprovado");
    }
}

function exibirResultado(nome, media, status){
    document.getElementById("resultado").innerHTML = "O aluno " + nome + " obteve média " + media.toFixed(2) + "\n Resultado: " + status;
}