var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeout");
    setTimeout(function(){
    event.target.parentNode.remove();
    },500);
    
});







//var paciente = document.querySelectorAll(".paciente");
//paciente.forEach(function(paciente){
  //  paciente.addEventListener("dblclick", function(){
    //    console.log("fui clicado duas vezes");
      //  this.remove();
    //});
//});