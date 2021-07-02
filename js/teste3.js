var botaoAdicionar = document.querySelector("#adicionar-paciente"); // Formato 1
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    // trás as informações preenchidas nas caixas de texto
    var form = document.querySelector("#form-adiciona");

    
    function obtemformulariodopaciente (form){
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
           }
    }
    
    // criação das trs e td
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

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


});



