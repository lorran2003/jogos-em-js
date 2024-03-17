//vetores para armazenar as jogadas
let arrayX = [];
let arrayO = [];
//vetor de posições
let arrayPosicoe = [];
//contador de jogadas
var cont = 0;
//criando uma variavel para alternar os jogadores
var verificar = true;


//função que é acionada ao clicar no botão
function jogar(local) {
    //validação da jogada anterior
    if (arrayPosicoe.includes(local)) {
        
        alert("Não pode jogar duas vezes no mesmo local!");
        
    } else {
        //contando cada jogada
        cont++;
        
        //verificando a vez de qual jogador
        if (verificar == true) {
            
            document.getElementById(`btn${local}`).innerHTML = "X";
            document.getElementById(`btn${local}`).style.color = "white";

            verificar = false;

            arrayX.push(local);

            //verificando se existe as posições para o vencer
            
            if (arrayX.includes(1) && arrayX.includes(2) && arrayX.includes(3)) {
                setTimeout(function () {
                    alert("Jogador 1 vencer");
                }, 100)
            }
            else if (arrayX.includes(4) && arrayX.includes(5) && arrayX.includes(6)) {
                setTimeout(function () {
                    alert("Jogador 1 vencer");
                }, 100)
                
            }
            else if (arrayX.includes(7) && arrayX.includes(8) && arrayX.includes(9)) {
                setTimeout(function () {
                    alert("Jogador 1 vencer");
                }, 100)

            }
            else if (arrayX.includes(3) && arrayX.includes(5) && arrayX.includes(7)) {
                setTimeout(function () {
                    alert("Jogador 1 vencer");
                }, 100)
                
            }
            else if (arrayX.includes(1) && arrayX.includes(5) && arrayX.includes(9)) {
                setTimeout(function () {
                    alert("Jogador 1 vencer");
                }, 100)

            }
            else if (arrayX.includes(1) && arrayX.includes(4) && arrayX.includes(7)) {
                setTimeout(function () {
                    alert("Jogador 1 vencer");
                }, 100)
                
            }
            else if (arrayX.includes(2) && arrayX.includes(5) && arrayX.includes(8)) {
                setTimeout(function () {
                    alert("Jogador 1 vencer");
                }, 100)
                
            }
            else if (arrayX.includes(3) && arrayX.includes(6) && arrayX.includes(9)) {
                setTimeout(function () {
                    alert("Jogador 1 vencer");
                }, 100)

            }
            else {
                if (cont === 9) {
                    setTimeout(function () {
                        alert("Deu velha");
                    }, 100)
                }
            }

        } else {
            document.getElementById(`btn${local}`).innerHTML = "O";

            verificar = true;

            arrayO.push(local);

            console.log("Valores do vetor O :" + arrayO);
            
            //verificando se existe as posições para o vencer
            
            if (arrayO.includes(1) && arrayO.includes(2) && arrayO.includes(3)) {
                setTimeout(function () {
                    alert("Jogador 2 venceu");
                }, 100)
            }
            else if (arrayO.includes(4) && arrayO.includes(5) && arrayO.includes(6)) {
                setTimeout(function () {
                    alert("Jogador 2 venceu");
                }, 100)
                
            }
            else if (arrayO.includes(7) && arrayO.includes(8) && arrayO.includes(9)) {
                setTimeout(function () {
                    alert("Jogador 2 venceu");
                }, 100)
                
            }
            else if (arrayO.includes(3) && arrayO.includes(5) && arrayO.includes(7)) {
                setTimeout(function () {
                    alert("Jogador 2 venceu");
                }, 100)

            }
            else if (arrayO.includes(1) && arrayO.includes(5) && arrayO.includes(9)) {
                setTimeout(function () {
                    alert("Jogador 2 venceu");
                }, 100)
                
            }
            else if (arrayO.includes(1) && arrayO.includes(4) && arrayO.includes(7)) {
                setTimeout(function () {
                    alert("Jogador 2 venceu");
                }, 100)
                
            }
            else if (arrayO.includes(2) && arrayO.includes(5) && arrayO.includes(8)) {
                setTimeout(function () {
                    alert("Jogador 2 venceu");
                }, 100)
                
            }
            else if (arrayO.includes(3) && arrayO.includes(6) && arrayO.includes(9)) {
                setTimeout(function () {
                    alert("Jogador 2 venceu");
                }, 100)

            }
            else {
                if (cont === 9) {
                    setTimeout(function () {
                        alert("Deu velha");
                    }, 100)
                }
            }

        }
        arrayPosicoe.push(local)
    }
}

function resetar() {
    document.body.innerHTML = `
    <div id="container">
    <div id="linha1">
        <div class="left" ><button type="button" onmouseover="hover(1)" id="btn1" onclick="jogar(1)"></button></div>
        <div class="meio" ><button type="button" onmouseover="hover(2)" id="btn2" onclick="jogar(2)"></button></div>
        <div class="right"><button type="button" onmouseover="hover(3)" id="btn3" onclick="jogar(3)"></button></div>
    </div>
    <div id="linha2">
        <div class="left"  ><button type="button" onmouseover="hover(4)" id="btn4" onclick="jogar(4)"></button></div>
        <div class="meio"  ><button type="button" onmouseover="hover(5)" id="btn5" onclick="jogar(5)"></button></div>
        <div class="right" ><button type="button" onmouseover="hover(6)" id="btn6" onclick="jogar(6)"></button></div>
    </div>
    <div id="bottom">
        <div id="linha3">
            <div class="left"  ><button type="button" onmouseover="hover(7)" id="btn7" onclick="jogar(7)"></button></div>
            <div class="meio"  ><button type="button" onmouseover="hover(8)" id="btn8" onclick="jogar(8)"></button></div>
            <div class="right" ><button type="button" onmouseover="hover(9)" id="btn9" onclick="jogar(9)"></button></div>
        </div>
            <button id="reset" type="button" onclick="resetar()">Resetar</button>
    </div>
</div>
    `
    arrayPosicoe = [];
    arrayX = [];
    arrayO = [];
    cont = 0;
}