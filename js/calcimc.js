console.log("fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo"); 
titulo.textContent= "aparecida nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    tdimc.textContent = imc;

    var pesoehvalido = validapeso(peso);
    var alturaehvalida = validaaltura(altura);

if(!pesoehvalido){
    console.log("peso invalido");
    pesoehvalido = false;
    tdimc.textContent = "peso invalido";
    paciente.classList.add("paciente-invalido");
}

if (!alturaehvalida){
    console.log("altura invalida");
    alturaehvalida = false;
    tdimc.textContent = "altura invalida";
    paciente.classList.add("paciente-invalido");
    

}
if (alturaehvalida && pesoehvalido){
    var imc = calcimc (peso,altura);
    tdimc.textContent = imc;
}
}

function validapeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaaltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}


function calcimc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


