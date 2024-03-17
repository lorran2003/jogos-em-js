//escreva uma função que receba uma estring e retorne a menor palavra
function lerPalavras() {
    //variavel dos inputs
    const input1 = document.getElementById("palavra1");
    const input2 = document.getElementById("palavra2");
    const input3 = document.getElementById("palavra3");
    const input4 = document.getElementById("palavra4");
    const input5 = document.getElementById("palavra5");
    //variavel dos valores dos inputs
    const valorInput1 = input1.value;
    const valorInput2 = input2.value;
    const valorInput3 = input3.value;
    const valorInput4 = input4.value;
    const valorInput5 = input5.value;

    if (valorInput1.length < valorInput2.length && valorInput1.length < valorInput3.length && valorInput1.length < valorInput4.length &&
    valorInput1.length < valorInput5.length) {
        const respota = `
             <p>A menor palavra digitada foi:</p>
            <h3>${valorInput1}</h3>
            `
        let divResposta = document.getElementById("resposta");
        divResposta.style.display = "flex";
        divResposta.innerHTML = respota;
    }
    //if da palavra2
    else if (valorInput2.length < valorInput1.length && valorInput2.length < valorInput3.length && valorInput2.length < valorInput4.length &&
    valorInput2.length < valorInput5.length) {
        const respota = `
             <p>A menor palavra digitada foi:</p>
            <h3>${valorInput2}</h3>
            `
        let divResposta = document.getElementById("resposta");
        divResposta.style.display = "flex";
        divResposta.innerHTML = respota;
    }
    //if da palavra3
    else if (valorInput3.length < valorInput2.length && valorInput3.length < valorInput1.length && valorInput3.length < valorInput4.length &&
     valorInput3.length < valorInput5.length) {
        const respota = `
             <p>A menor palavra digitada foi:</p>
            <h3>${valorInput3}</h3>
            `
        let divResposta = document.getElementById("resposta");
        divResposta.style.display = "flex";
        divResposta.innerHTML = respota;
    }
    //if palavra4
    else if (valorInput4.length < valorInput2.length && valorInput4.length < valorInput3.length && valorInput4.length < valorInput1.length &&
        valorInput4.length < valorInput5.length) {
        const respota = `
             <p>A menor palavra digitada foi:</p>
            <h3>${valorInput4}</h3>
            `
        let divResposta = document.getElementById("resposta");
        divResposta.style.display = "flex";
        divResposta.innerHTML = respota;
    }
    //else palavra5
    else {
        const respota = `
            <p>A menor palavra digitada foi:</p>
            <h3>${valorInput5}</h3>
            `
        let divResposta = document.getElementById("resposta");
        divResposta.style.display = "flex";
        divResposta.innerHTML = respota;
    }

}