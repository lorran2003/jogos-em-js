//esta variavel vai auxilar a variavel "valor2" para armazenar o valor da primeira carta selecionada pois a variavel "valor1" sempre receberá a ultima carta selecionada pelo usuario
var valorAux = undefined;
var acertos = 0;
//função que vai ler os inputs
function lerNome() {

    //lendo os input
    let inputFirst = document.getElementById("firtsName").value;

    //validação para não permitir o input ficar vazio
    if (inputFirst === "") {
        alert("Preencha os campos!");
    } else {
        //escondendo o card das informações e exibindo as cartas
        document.getElementById("blocoMenu").style.display = "none";
        document.getElementById("cartas").style.display += "block";
        document.getElementById("playerName").innerHTML = `Player: ${inputFirst}`;
    }
}

//iniciando variavel para armazenar a carta acionada
let cartaAcionada = undefined;

// função para ler as cartas
function verificarCarta(number) {

    //condição para não clicar na mesma carta duas vezes
    if (cartaAcionada === number) {
        alert("Não pode clicar duas vezes na mesma imagem");

    } else {


        //atribuindo o valor da carta para variavel
        cartaAcionada = number;

        //armazenar valor da carta acionada
        let valor1 = number;


        //trocando a imagem
        let flipCard = document.getElementsByClassName("innerCard");
        console.log("executando o primeiro flip");
        flipCard[number].style.transform += "rotateY(180deg)";
        flipCard[number].style.transition += "0.5s";

        // variavel auxiliar para receber o valor da primera carta
        let valor2 = valorAux;

        //A variavel "valorAux" fara com que a variavel "valor2" sempre receba o valor da primeira carta acionada
        valorAux = number;

        //variaves que vão receber a tag das cartas que receberem o click
        let card1 = document.getElementById(`carta${valor1}`);
        let card2 = document.getElementById(`carta${valor2}`);

        //verificando se está na segunda jogada para comparar as cartas
        if (valor2 != undefined) {
            //comparando se ambas imagens são as mesmas
            if (card1.src === card2.src) {
                valorAux = undefined;
                acertos += 1;
            }//caso erre vai entrar no else 
            else {
                //resetando as imagens com delay para dar tempo de ver as imagens
                setTimeout(function () {

                    flipCard[valor1].style.transform = "rotateY(0deg)";
                    flipCard[valor1].style.transition = "0.5s";
                    flipCard[valor2].style.transform = "rotateY(0deg)";
                    flipCard[valor2].style.transition = "0.5s";

                }, 500)
                //redefinindo as variaveis
                valorAux = undefined;
                cartaAcionada = undefined;
            }
        }
        //Desvirando os cards ao acertar tudo
        if (acertos === 15) {
            var resetar = document.getElementsByClassName("resetar");

            setTimeout(() => {

                for (let index = 0; index < resetar.length; index++) {
                    resetar[index].style.transform = "rotateY(0deg)";
                    resetar[index].style.transition = "0.5s";
                }

            }, 300);

            setTimeout(() => {

                alert("Parabens!");
                location.reload();

            }, 500);
        }


    }


}


