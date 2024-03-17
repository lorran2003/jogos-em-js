function cadastro() {
    let jogador1 = document.getElementById("input1").value;
    let jogador2 = document.getElementById("input2").value;
    console.log(jogador1 + " " + jogador2);

    if (jogador1 === "" && jogador2 === "") {
        alert("Preencha os campos");
    } else {
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
        alert(`Jogador 1: ${jogador1} começa primeiro usando o X`);
    }
}