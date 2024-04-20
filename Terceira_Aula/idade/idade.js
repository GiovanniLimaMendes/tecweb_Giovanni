function calcularIdade(){
    const idade = parseInt(document.getElementById("idade").value);

    if (idade <= 12){
        document.getElementById("resultado").innerHTML = "Você possui " + idade + " anos, sua classificação de idade é Criança";
    } else if (idade >= 13 && idade <= 18){
        document.getElementById("resultado").innerHTML = "Você possui " + idade + " anos, sua classificação de idade é Adolescente";
    } else if (idade > 65){
        document.getElementById("resultado").innerHTML = "Você possui " + idade + " anos, sua classificação de idade é Idoso";
    } else{
        document.getElementById("resultado").innerHTML = "Você possui " + idade + " anos, sua classificação de idade é Adulto";
    }
}