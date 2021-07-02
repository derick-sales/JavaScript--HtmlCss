var botaoAdicionar = document.querySelector("#adicionar-paciente"); // Formato 1
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
        function calcimc(peso,altura){
        var imc = 0;
    
        imc = peso / (altura * altura);
    
        return imc.toFixed(2);
    }
    
    // teste de validação de nome;

function validanome(paciente)
var erros = [];
if(paciente.nome.length > 6){
    erros.push("nome invalido")
};
if(!paciente.gordura.length == 0){
    erros.push("a gordura não pode ser 0")
}
if(!paciente.nome.length == 0 && !paciente.nome.length >10){
    erros.push("numero maximo de caracteres atingido");
}

});
pacientes.forEach(function(tr){
    var pacienteNome = tr.querySelector(".info-nome").textContent;

    if (pacienteNome != this.value) {
        paciente.classList.add("invisivel");
    } else {
        paciente.classList.remove("invisivel");
    }
});
});
