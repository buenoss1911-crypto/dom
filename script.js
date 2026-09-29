// ----- getElementById -----
// meuElemento = document.getElementById("titulo_01");
// meuElemento.textContent = "texto alterado";

// ----- getElementsByClassName -----
// meuElemento = document.getElementsByClassName("tit-02");
// meuElemento[0].textContent = "texto alterado";

// ----- getElementsByTagName -----
// meuElemento = document.getElementsByTagName("h1");
// meuElemento[0].textContent = "texto alterado";

// ----- querySelector -----
// meuElemento = document.querySelector("#titulo_01");
// meuElemento.textContent = "texto alterado";

// ----- querySelector -----
// meuElemento = document.querySelector(".tit-02");
// meuElemento.textContent = "texto alterado";

// ----- querySelectorAll -----
// meuElemento = document.querySelectorAll("p");
// meuElemento[0].textContent = "texto alterado";

// ----- innerHTML -----
// meuElemento = document.querySelector("#p5");
// meuElemento.innerHTML = "<strong>Texto em negrito!</strong>";

// ----- addEventListener -----
// meuElemento = document.querySelector(".segunda-div");
// meuElemento.addEventListener("click", function() {
//     meuElemento.style.backgroundColor = "red";
// });

// ----- classList.toggle(class) -----
// meuElemento = document.querySelector(".segunda-div");
// antes = true;
// meuElemento.addEventListener("click", function () {
//     meuElemento.classList.toggle("estilo");
// });

// ----- createElement + //appendChild -----
// meuElemento = document.querySelector(".segunda-div");
// meuElemento.addEventListener("click", function() {
//     const novoP = document.createElement("p");
//     novoP.textContent = "Novo parágrafo adicionado!";
//     meuElemento.appendChild(novoP);
// });

const botaoPrincipal = document.getElementById("botaoPrincipal");
const botaoSecundario = document.getElementById("botaoSecundario");
const caixas = document.querySelectorAll(".caixa");

botaoPrincipal.addEventListener("click", function () {
    caixas[0].style.border = "2px solid red";
    caixas[1].style.border = "2px solid red";
    caixas[2].style.border = "2px solid red";
});

botaoSecundario.addEventListener("click", function () {
    caixas[0].style.border = "";
    caixas[1].style.border = "";
    caixas[2].style.border = "";
});