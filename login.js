function logar() {
    barra1 = document.getElementById("nome");
    barra2 = document.getElementById("senha");

    if(barra1.value!="" && barra2.value!="") {
        if(barra1.value=="admin" && barra2.value=="admin"){
            window.location.href = "HomesteadHub.html"
        }
        else{
            alert("Login ou senha incorretos!")
        }
    }
    else{alert("Favor, preencha todos os campos!")}

}

function excluir() {
    barra1 = document.getElementById("nome");
    barra2 = document.getElementById("senha");
    barra1.value = "";
    barra2.value = "";

    barra1 = "";
}
