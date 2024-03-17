//iniciando as variaveis que vão ler o btn ea divi acionada
let divBloco;
let btn;
//variavel que vai receber o parametro bloco
let parametroBloco;
//iniciando variavel para acionar outra função
let acionandoFuncao = false;

//função para identificar a div
function identificarBloco(bloco) {

    //variavel recebendo o valor do paramero
    parametroBloco = bloco;

    //variavel recebendo o html
    divBloco = document.getElementById(`bloco${bloco}`);

    //acionando a função mover
    setTimeout(function () {
        moverPeca();
    }, 100);

    //condição para acionar a função
    if (acionandoFuncao === true) {
        setTimeout(function () {
            possivelMovimentacao();
        }, 150);

        acionandoFuncao = false;

    } else {
        //apos a segunda execução da função a variavel recebe true
        acionandoFuncao = true;
    }

}

//iniciando variavel que vai receber o parametro do btn
let parametroPrimeiroBtn;
let callbackCorPrimeiroBtn;

let parametroSegundoBtn;
let callbackCorSegundoBtn;

// inicaindo variavel que vai contar quantas vezes ca ser acionado a função identificar btn
let contJogadas = 0;


//função para identicar o btn
function identificarPeca(peca, cbBtn) {
    
    //iniciando variavel do while
    let repeticao = true

    //variavel recebendo o html
    btn = document.getElementById(`btn${peca}`);

    //passando o parametro para função que vai mostrar o lacal que a peça pode se movimentar
    setTimeout(function () {
        possivelMovimentacao(peca, cbBtn);
    }, 150);

    console.log('valor da vriavel repeticao: ' + repeticao);

    while (repeticao === true) {
        
        console.log('valor da vriavel repeticao: ' + repeticao);

        //condição para identficar se estar na segunda jogada
        switch (contJogadas) {
            
            case 0:
                
                console.log("Case 0");
                //atribuindo os paramentros da primeira jogada para as variaveis
                parametroPrimeiroBtn = peca
                callbackCorPrimeiroBtn = cbBtn
                contJogadas++;
                repeticao = false;
                break;

            case 1:

                console.log("Case 1");
                //atribuindo os paramentros da primeira jogada para as variaveis
                parametroSegundoBtn = peca;
                callbackCorSegundoBtn = cbBtn;
                contJogadas++;
                repeticao = false
                break;

            default:

                console.log("Case 2");
                //resetando valores
                parametroPrimeiroBtn = undefined;
                callbackCorPrimeiroBtn = undefined;

                parametroSegundoBtn = undefined;
                callbackCorSegundoBtn = undefined;

                contJogadas = 0;
                repeticao = true;

                break;

        }
    }
}

//variavel que vai contar a jogada
let contadorDejogadas = 0;

//iniciando a variavel que vai identifacar o bloco do primeiro click
let divOrigem;

//iniciando varivel para verficar se a peça é branca ou preta
let corDaPeca = undefined;

//iniciado as variaveis 
let movieLeft;
let movieRight;

//função para mover o btn (OBS: o btn é as peças do tabuleiro);
function moverPeca() {

    //validação para verificar se clicou na peça
    if (divBloco != undefined && btn != undefined) {

        //Verificando se esta na primeira ou segunda jogada
        if (contadorDejogadas === 0) {

            // divOrigem vai recber o primeiro HTML acionado
            divOrigem = divBloco;

            //contando jogadas
            contadorDejogadas++;

            //delay para carregar o vlor da variavel cor da peça
            setTimeout(function () {

                switch (corDaPeca) {
                    case 0:
                        //caso o valor for 0 significa que a peça é branca
                        movieLeft = parametroBloco + 7;
                        movieRight = parametroBloco + 9;

                        break;

                    case 1:
                        //caso o valor for 1 significa que a peça é preta
                        movieLeft = parametroBloco - 9;
                        movieRight = parametroBloco - 7;

                        break;

                    default:
                        console.log("ERRO no SWITCH cor da peça")
                        break;
                }
            }, 80);

        } else {

            //validação para não deixar clicar duas vezes no mesmo local
            if (divOrigem === divBloco) {
                alert("Clique em algum lugar valido para mover a peça!");

            } else {

                //condição que vai permitir só jogadas na diagonal
                if (parametroBloco === movieLeft || parametroBloco === movieRight) {

                    //movendo o btn
                    divOrigem.removeChild(btn);
                    divBloco.appendChild(btn);

                } else {
                    alert("Você só pode jogar na diagonais!");
                }

                //reiniciando a variavel contador de jogadas
                contadorDejogadas = 0;

                // reiniciando o valor da variavel divBloco e btn
                btn = undefined
                divBloco = undefined
            }
        }

    } else {
        alert("clique em uma peça!");
    }
}
//função para limitar a movimentação das peças
function possivelMovimentacao(peca, cbBtn) {

    if (cbBtn === "pecaBranca") {

        corDaPeca = 0;

        //logica para peça se movimentar para direita ou esquerda
        let blocoLeft = parametroBloco + 7;
        let blocoRight = parametroBloco + 9;

        if (contadorDejogadas === 1) {


            //mudando style do bloco a esquerda
            document.getElementById(`bloco${blocoLeft}`).style.boxShadow = "0px 0px 6px black";
            document.getElementById(`bloco${blocoLeft}`).style.padding = "1px"
            document.getElementById(`bloco${blocoLeft}`).style.transition = "0.6s";

            //mudando style do bloco a direita
            document.getElementById(`bloco${blocoRight}`).style.boxShadow = "0px 0px 6px black";
            document.getElementById(`bloco${blocoRight}`).style.padding = "1px"
            document.getElementById(`bloco${blocoRight}`).style.transition = "0.6s";

        } //removendo os styles
        else {

            //removendo style do bloco a esquerda
            document.getElementById(`bloco${blocoLeft}`).style.removeProperty("boxShadow");
            document.getElementById(`bloco${blocoLeft}`).style.removeProperty("padding");
            document.getElementById(`bloco${blocoLeft}`).style.transition = "0.6s";

            //removendo style do bloco a direita
            document.getElementById(`bloco${blocoRight}`).style.removeProperty("boxShadow");
            document.getElementById(`bloco${blocoRight}`).style.removeProperty("padding");
            document.getElementById(`bloco${blocoRight}`).style.transition = "0.6s";

        }

    } else {

        corDaPeca = 1;

        //logica para peça se movimentar para direita ou esquerda
        let blocoLeft = parametroBloco - 9;
        let blocoRight = parametroBloco - 7;

        if (contadorDejogadas === 1) {

            //mudando style do bloco a esquerda
            document.getElementById(`bloco${blocoLeft}`).style.boxShadow = "0px 0px 6px black";
            document.getElementById(`bloco${blocoLeft}`).style.padding = "1px"
            document.getElementById(`bloco${blocoLeft}`).style.transition = "0.6s";

            //mudando style do bloco a direita
            document.getElementById(`bloco${blocoRight}`).style.boxShadow = "0px 0px 6px black";
            document.getElementById(`bloco${blocoRight}`).style.padding = "1px"
            document.getElementById(`bloco${blocoRight}`).style.transition = "0.6s";

        } //removendo os styles
        else {

            //removendo style do bloco a esquerda
            document.getElementById(`bloco${blocoLeft}`).style.removeProperty("boxShadow");
            document.getElementById(`bloco${blocoLeft}`).style.removeProperty("padding");
            document.getElementById(`bloco${blocoLeft}`).style.transition = "0.6s";

            //removendo style do bloco a direita
            document.getElementById(`bloco${blocoRight}`).style.removeProperty("boxShadow");
            document.getElementById(`bloco${blocoRight}`).style.removeProperty("padding");
            document.getElementById(`bloco${blocoRight}`).style.transition = "0.6s";

        }

    }

}

function comerPeca() {
    
}