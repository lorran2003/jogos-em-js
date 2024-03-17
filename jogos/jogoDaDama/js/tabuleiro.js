let cont = 1;
let aux = 1;
let peca = 1;
let linhasSuperior = 1;
let linhasInferior = 1;
let auxBloco = 41;
while (cont != 9) {
    //escrever os blocos

    for (let index = 0; index < 8; index++) {

        document.getElementById(`linha${cont}`).innerHTML += `<div id="bloco${aux}" onclick="identificarBloco(${aux})"></div>`;

        //mudando a cor do bloco

        // se o resto da divisão cont / 2 for igual a 0 muda o background

        if (cont % 2 === 0) {
            // se o resto da divisão aux / 2 for igual a 0 indica que o bloco tem id par
            // if para identificar se o id é par ou impar par mudar o bakcground
            if (aux % 2 === 0) {
                document.getElementById(`bloco${aux}`).style.backgroundColor = "#0172bd";
            } else {
                document.getElementById(`bloco${aux}`).style.backgroundColor = "white";
            }
        }
        else {
            if (aux % 2 != 0) {
                document.getElementById(`bloco${aux}`).style.backgroundColor = "#0172bd";
            } else {
                document.getElementById(`bloco${aux}`).style.backgroundColor = "white";
            }
        }

        aux++;
    }

    cont++;
}

//criando as peças do canto superior
while (linhasSuperior < 4) {

    for (let index = 0; index < 8; index++) {

        if (linhasSuperior % 2 === 0) {

            if (peca % 2 === 0) {

                document.getElementById(`bloco${peca}`).innerHTML = `<button type="button" id="btn${peca}" class = "btnParteSuperior" onclick="identificarPeca(${peca}, 'pecaBranca' )"></button>`;
            }
        }
        else {

            if (peca % 2 != 0) {

                document.getElementById(`bloco${peca}`).innerHTML = `<button type="button" id="btn${peca}" class = "btnParteSuperior" onclick="identificarPeca(${peca}, 'pecaBranca' )"></button>`;
                
            }
        }

        peca++;
    }
    linhasSuperior++;
}

//criando as peçasdo canto inferior
while (linhasInferior < 4) {

    for (let index = 0; index < 8; index++) {

        if (linhasInferior % 2 === 0) {

            if (auxBloco % 2 != 0) {

                document.getElementById(`bloco${auxBloco}`).innerHTML = `<button type="button" id="btn${peca}" class = "btnParteInferior" onclick="identificarPeca(${peca},'pecaPreta')"></button>`;
            }
        }
        else {

            if (auxBloco % 2 === 0) {

                document.getElementById(`bloco${auxBloco}`).innerHTML = `<button type="button" id="btn${peca}" class = "btnParteInferior" onclick="identificarPeca(${peca},'pecaPreta')"></button>`;

            }
        }

        peca++;
        auxBloco++;
    }
    linhasInferior++;
}

