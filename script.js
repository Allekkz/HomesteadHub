const pessoas = [

];

//Limpa os dados
function limpeza() {
    const barraPessoas = document.getElementById("BarraPessoas");
    const listaPessoas = document.getElementById("listaPessoas");

    const textobairro = document.getElementById("BarraBairro");
    const textorua = document.getElementById("BarraRua");
    const textoFamilia = document.getElementById("BarraFamilia");
    const textoMA = document.getElementById("BarraMA");

    textobairro.value = "";
    textorua.value = "";
    textoFamilia.value = "";
    textoMA.value = "";
    barraPessoas.value = "";

    pessoas.length = 0;
    listaPessoas.innerHTML = "";
}

//Adiciona Pessoas;
function add() {
    const barraPessoas = document.getElementById("BarraPessoas");
    const listaPessoas = document.getElementById("listaPessoas");

    const textobairro = document.getElementById("BarraBairro");
    const textorua = document.getElementById("BarraRua");
    const textoFamilia = document.getElementById("BarraFamilia");
    const textoMA = document.getElementById("BarraMA");

    if (barraPessoas.value != "") {

        var limpar = document.getElementById("Limpar");
        var li = document.createElement("li");
        li.innerHTML = barraPessoas.value;
        listaPessoas.appendChild(li);
        pessoas.push(barraPessoas.value);

        barraPessoas.value = "";

        limpar.addEventListener("click", function () {
            textobairro.value = "";
            textorua.value = "";
            textoFamilia.value = "";
            textoMA.value = "";
            barraPessoas.value = "";

            pessoas.length = 0;
            listaPessoas.innerHTML = "";
        })
    }
}


//Gera o PDF
function gerar() {
    const barra1 = document.getElementById("BarraRua").value
    const barra2 = document.getElementById("BarraBairro").value
    const barra3 = document.getElementById("BarraFamilia").value
    const barra4 = document.getElementById("BarraMA").value

    const doc = new jsPDF({
        orientation: 'landscape',
    });
    doc.setFontSize(25);
    doc.text(pessoas.join('\n'), 10, 135);
    doc.text("Rua: " + barra1, 10, 15);
    doc.text("Bairro: " + barra2, 10, 27)
    doc.text("Família: " + barra3, 240, 15);
    doc.text("M.A: " + barra4, 240, 27);

    doc.save("meu_pdf.pdf");
}

//Const de sugestoes para o autocomplete
const sugestoes = [
    "Do ouro",
    "Governador Valadares",
    "Praça da piedade",
    "Martins Lustosa",
    "Benedito Cândido",
    "Costa Silva",
    "Euríco G. Dutra",
    "José Bonifácio",
    "Olímpio Valias de Rezende",
]

//função do autocompletar
function autoComplete() {
    const barra = document.getElementById("BarraRua");
    const lista = document.getElementById("ULlista");
    const listaDiv = document.getElementById("listaComplete");

    lista.innerHTML = "";
    var limite = 0;
    if (barra.value != "") {
        if (barra.value.length >= 2 && barra.value.length <= 5) {


            for (var i = 0; i < sugestoes.length; i++) {
                if (sugestoes[i].toLowerCase().includes(barra.value.toLowerCase())) {
                    lista.style.display = "block";
                    listaDiv.style.display = "block"
                    var li = document.createElement("li");
                    li.innerHTML = sugestoes[i];
                    lista.appendChild(li);
                    limite++;
                    li.addEventListener("click", function () {
                        barra.value = this.innerHTML;
                        lista.innerHTML = "";
                        listaDiv.style.display = "none";
                    })
                    if (limite >= 4) { break }
                }

            }
        }
    }
    else {
        listaDiv.style.display = "none";
        lista.style.display = "none";
    }



}
