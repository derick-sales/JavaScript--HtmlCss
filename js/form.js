var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("oi fui clicado ");

    var form = document.querySelector("#form-adiciona");
    var paciente = obtempacientedoformulario(form);

    // criação de tr e td
    AdicionaPacientesNaTabela(paciente);
    var erros = validapaciente(paciente);
    console.log(erros);
  
    if (erros.length > 0) {
        exibemensagensdeerro(erros);
        return;
    }

    var mensagemerro = document.querySelector("#mensagens-erro");
    mensagemerro.innerHTML = "";

    form.reset();
});

function AdicionaPacientesNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibemensagensdeerro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtempacientedoformulario(form) {
    var paciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcimc(form.peso.value, form.altura.value)

    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validapaciente(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("o nome não pode ficar em branco");
    }
    if (!validapeso(paciente.peso)) {
        erros.push("peso é invalido");
    }
    if (!validaaltura(paciente.altura)) {
        erros.push("altura é invalida");
    }
    if (paciente.gordura.length == 0) {
        erros.push("a gordura não pode ser 0");
    }
    if (paciente.peso.length == 0) {
        erros.push("peso não pode ser em branco")
    }
    if (paciente.altura.length == 0) {
        erros.push("altura não pode ser em branco")
    }
    return erros;
}

// teste de validação de nome;