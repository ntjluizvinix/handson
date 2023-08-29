function exibirMensagem(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    alert("Hello World " + nome + " " + sobrenome);
    alert(`Hello World ${nome + " " + sobrenome}`);
}