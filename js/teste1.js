var botaoAdicionar = document.querySelector("#adicionar-paciente"); // Formato 1
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    // trás as informações preenchidas nas caixas de texto
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemformulariodopaciente(form);

    var pacienteTr = montaTr(paciente);
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
    
    function obtemformulariodopaciente (form){
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calcimc(form.peso.value, form.altura.value)
           }
           return paciente;
    }
    // criação das trs e td

  

    function montaTr (paciente){
        var pacienteTr = document.createElement("tr");
 
 
        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");
     
 
        nomeTd.textContent = paciente.nome;
        pesoTd.textContent = paciente.peso;
        alturaTd.textContent = paciente.altura;
        gorduraTd.textContent = paciente.gordura;
        imcTd.textContent = paciente.imc;
 
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);
        
        return pacienteTr;

    }
        
       

        function montaTd (dado,classe){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);

        return td;
        }
        


});

       


 