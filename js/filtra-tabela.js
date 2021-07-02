var campofiltro = document.querySelector("#filtrar-tabela");

campofiltro.addEventListener("input", function () {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var Tdnome = paciente.querySelector(".info-nome");
        var nome = Tdnome.textContent;
        var expressao = new RegExp(this.value, "i");
        if ( !expressao.test(nome)) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
}
    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
    }
}
});

