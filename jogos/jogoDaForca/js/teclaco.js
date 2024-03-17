const arrayLetras = [

    {
        letra: "A",
    },
    {
        letra: "B",
    },
    {
        letra: "C",
    },
    {
        letra: "D",
    },
    {
        letra: "E",
    },
    {
        letra: "F",
    },
    {
        letra: "G",
    },
    {
        letra: "H",
    },
    {
        letra: "I",
    },
    {
        letra: "J",
    },
    {
        letra: "K",
    },
    {
        letra: "L",
    },
    {
        letra: "M",
    },
    {
        letra: "N",
    },
    {
        letra: "O",
    },
    {
        letra: "P",
    },
    {
        letra: "Q",
    },
    {
        letra: "R",
    },
    {
        letra: "S",
    },
    {
        letra: "T",
    },
    {
        letra: "U",
    },
    {
        letra: "V",
    },
    {
        letra: "W",
    },
    {
        letra: "X",
    },
    {
        letra: "Y",
    },
    {
        letra: "Z",
    },
]
//for para gerar os btn
for (let index of arrayLetras) {
    //adicionando os btn na div
    document.getElementById("tamanhoTeclado").innerHTML += ` 
    <button type="button" class="btnTeclado" onclick="verificarLetraEscolhida('${index.letra}')" id="tecla-${index.letra}" >${index.letra}</button>
    `
}
console.log(document.getElementById("tamanhoTeclado"));
//adicionado btn jogar novamente
document.getElementById("tamanhoTeclado").innerHTML += ` 
<button type="button" class="btnTeclado" id="btnJogarNovamente" onclick="gerarPalavraChave()"><img src="../img/controle-de-video-game.png" alt="" id ="imgControl"></button>
    `;
    console.log(document.querySelector(".btnTeclado"));

function verificarLetraEscolhida(letra){
    mudarStyleLetra("tecla-" + letra);
    let valorTecla = letra;
    
}
function mudarStyleLetra(letra){
    document.getElementById(letra).style.backgroundColor = "yellow";
    document.getElementById(letra).style.color = "white";
}