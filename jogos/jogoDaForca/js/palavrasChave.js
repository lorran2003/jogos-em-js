// array com as palavras secretas
const arrayPalavraChave = [
    {
        id: 1,
        palavra: 'Bahamas',
        categoria: 'LUGAR',
    },
    {
        id: 2,
        palavra: 'Chade',
        categoria: 'LUGAR',
    },
    {
        id: 3,
        palavra: 'Jamaica',
        categoria: 'LUGAR',
    },
    {
        id: 4,
        palavra: 'Belize',
        categoria: 'LUGAR',
    },
    {
        id: 5,
        palavra: 'Argentina',
        categoria: 'LUGAR',
    },
    {
        id: 6,
        palavra: 'Uruguai',
        categoria: 'LUGAR',
    },
    {
        id: 7,
        palavra: 'Granada',
        categoria: 'LUGAR',
    },
    {
        id: 8,
        palavra: 'Filipinas',
        categoria: 'LUGAR',
    },
    {
        id: 9,
        palavra: 'Israel',
        categoria: 'LUGAR',
    },
    {
        id: 10,
        palavra: 'Cingapura',
        categoria: 'LUGAR',
    },
    {
        id: 11,
        palavra: 'Russia',
        categoria: 'LUGAR',
    },
    {
        id: 12,
        palavra: 'Nepal',
        categoria: 'LUGAR',
    },
    {
        id: 13,
        palavra: 'Catar',
        categoria: 'LUGAR',
    },
    {
        id: 14,
        palavra: 'Londres',
        categoria: 'LUGAR',
    },
    {
        id: 15,
        palavra: 'Bolzano',
        categoria: 'LUGAR',
    },
    {
        id: 16,
        palavra: 'Iraque',
        categoria: 'LUGAR',
    },
    {
        id: 17,
        palavra: 'Espanha',
        categoria: 'LUGAR',
    },
    {
        id: 18,
        palavra: 'Chipre',
        categoria: 'LUGAR',
    },
    {
        id: 19,
        palavra: 'Irlanda',
        categoria: 'LUGAR',
    },
    {
        id: 20,
        palavra: 'Noruega',
        categoria: 'LUGAR',
    },
    {
        id: 21,
        palavra: 'Montenegro',
        categoria: 'LUGAR',
    },
    {
        id: 22,
        palavra: 'Inglaterra',
        categoria: 'LUGAR',
    },
    {
        id: 23,
        palavra: 'Angola',
        categoria: 'LUGAR',
    },
    {
        id: 25,
        palavra: 'Benin',
        categoria: 'LUGAR',
    },
    {
        id: 26,
        palavra: 'Burundi',
        categoria: 'LUGAR',
    },


    {
        id: 27,
        palavra: 'Fossa',
        categoria: "ANIMAL",
    },
    {
        id: 28,
        palavra: 'Rato',
        categoria: "ANIMAL",
    },
    {
        id: 29,
        palavra: 'Cachorro',
        categoria: "ANIMAL",
    },
    {
        id: 30,
        palavra: "Canguru",
        categoria: "ANIMAL",
    },
    {
        id: 31,
        palavra: "Tatu",
        categoria: "ANIMAL",
    },
    {
        id: 32,
        palavra: "Golfinho",
        categoria: "ANIMAL",
    },
    {
        id: 33,
        palavra: "Blobfish",
        categoria: "ANIMAL",
    },
    {
        id: 34,
        palavra: "Babirussa",
        categoria: "ANIMAL",
    },
    {
        id: 35,
        palavra: 'Arara',
        categoria: "ANIMAL",
    },
    {
        id: 36,
        palavra: 'Tartaruga',
        categoria: "ANIMAL",
    },
    {
        id: 37,
        palavra: 'Caranguejo',
        categoria: "ANIMAL",
    },
    {
        id: 38,
        palavra: 'Lampreia',
        categoria: "ANIMAL",
    },
    {
        id: 39,
        palavra: 'Dugong',
        categoria: "ANIMAL",
    },
    {
        id: 40,
        palavra: 'Gerenuk',
        categoria: "ANIMAL",
    },
    {
        id: 41,
        palavra: 'Macaco-narigudo',
        categoria: "ANIMAL",
    },
    {
        id: 42,
        palavra: 'Tatu-bola',
        categoria: "ANIMAL",
    },
    {
        id: 43,
        palavra: 'Polvo',
        categoria: "ANIMAL",
    },
    {
        id: 44,
        palavra: 'Mara',
        categoria: "ANIMAL",
    },
    {
        id: 45,
        palavra: 'Tigre',
        categoria: "ANIMAL",
    },
    {
        id: 46,
        palavra: 'Jerboa',
        categoria: "ANIMAL",
    },
    {
        id: 47,
        palavra: 'Borboleta',
        categoria: "ANIMAL",
    },
    {
        id: 48,
        palavra: "Dragao de comodo",
        categoria: "ANIMAL",
    },
    {
        id: 49,
        palavra: "Tesourão",
        categoria: "ANIMAL",
    },
    {
        id: 50,
        palavra: 'Pinguim',
        categoria: "ANIMAL",
    },
    {
        id: 51,
        palavra: "Zebra",
        categoria: "ANIMAL",
    },

    {
        id: 52,
        palavra: 'bumerangue',
        categoria: "OBJETO",

    },
    {
        id: 53,
        palavra: 'borracha',
        categoria: "OBJETO",

    },
    {
        id: 54,
        palavra: 'cacareco',
    },
    {
        id: 55,
        palavra: "excepcional",
    },
    {
        id: 56,
        palavra: "ziquizira",
    },
    {
        id: 57,
        palavra: "losango",
    },
    {
        id: 58,
        palavra: "herdeiro",
    },
    {
        id: 59,
        palavra: "envernizar",
    },
    {
        id: 60,
        palavra: 'espinafre',
    },
    {
        id: 61,
        palavra: 'universidade',
    },
    {
        id: 62,
        palavra: 'serpentina',
    },
    {
        id: 63,
        palavra: 'potiguar',
    },
    {
        id: 64,
        palavra: 'prurido',
    },
    {
        id: 65,
        palavra: 'simulacro',
    },
    {
        id: 66,
        palavra: 'ventilador',
    },
    {
        id: 67,
        palavra: 'ziguezague',
    },
    {
        id: 68,
        palavra: 'zumbido',
    },
    {
        id: 69,
        palavra: 'reflorescer',
    },
    {
        id: 70,
        palavra: 'insignificancia',
    },
    {
        id: 71,
        palavra: 'hipocrisia',
    },
    {
        id: 72,
        palavra: 'humanizar',
    },
    {
        id: 73,
        palavra: "grampeador",
    },
    {
        id: 74,
        palavra: "manteigueira",
    },
    {
        id: 75,
        palavra: 'gargantilha',
    },
    {
        id: 76,
        palavra: "glorioso",

    },

]
//array das letras acertadas
let arrayLetrasAdivinhadas= [

]
// palavra sorteada
let arryLetrasDaPalavraChave = [
]
let letrasAcionadas;

let palavraSecretaSorteada = null;

alert("Em algumas rodadas você não tera dicas");

function verificarLetraEscolhida(letra){
    console.log(palavraSecretaSorteada);
    //variaveis da imagens 
    
    mudarStyleLetra("tecla-" + letra);
    //letra digitada
    letrasAcionadas = letra;
    console.log(letrasAcionadas);
    //listando as letras discadas no html
    document.getElementById("letras").innerHTML = arrayLetrasAdivinhadas
    document.getElementById("letrasAcionadas").style.display = "flex";

    //variavel para verificar
    let verificar = false;

    //loop para percorrer o array das letras da palavra secreta
    for(let index = 0; index < palavraSecretaSorteada.length; index++)
    {   
        //comparando lera digitada com da palavra secreta
        if (letrasAcionadas === arryLetrasDaPalavraChave[index]) {
            verificar = true;
            console.log(verificar)
           
        }
       console.log(verificar);
    }

    //alterando os estilo caso acerte ou erre
    if (verificar == true) {
        document.getElementById("teclado").style.boxShadow = "0 0 6px #7cfc00";
        document.getElementById("teclado").style.background = "url('../img/simpson\ aliviado.jpg') no-repeat right";
    } else {
        document.getElementById("teclado").style.boxShadow = "0 0 6px red";
        document.getElementById("teclado").style.background = "url('../img/simpsonErro.jpg') no-repeat right";
    }
    arrayLetrasAdivinhadas.push(letra);
    console.log(arrayLetrasAdivinhadas);
    
    verificarLetraNaPalavra();
}
function verificarLetraNaPalavra(){
    
}
function mudarStyleLetra(letra){
    
    document.getElementById(letra).style.backgroundColor = "yellow";
    document.getElementById(letra).style.color = "white";
}
function gerarPalavraChave() {

    //mudando o backgrounda das letras
    
    
    //zerando a variavel palavraSecreta
    let divLetras = " ";
    const divPalavra =   document.getElementById("palavra");
    divPalavra.innerHTML = divLetras;

    //gerando  numero aleatorio de 1 a 76
    let random = Math.floor(Math.random() * 76) + 1;

    let cont = 0;
    divLetras = `
    <div class="letras" id = ""></div>
    `

    //pegando indice do array gerado pelo rando
    let palavraSecreta = arrayPalavraChave[random].palavra.toUpperCase();
    let categoria = arrayPalavraChave[random].categoria;
    palavraSecretaSorteada = palavraSecreta.toUpperCase();
    
    
    for (let index = 0; index < palavraSecreta.length; index++) {
        divPalavra.innerHTML += divLetras
        cont++;
        console.log(cont)
    }
    //array de letras da palavra secreata
    arryLetrasDaPalavraChave = palavraSecreta.split('');    
    console.log(arryLetrasDaPalavraChave);
    
    if (categoria != null) {
        document.getElementById("dica").innerHTML = `<p>${categoria}</p>`
        document.getElementById("dica").style.display = "block"
    }
    else{
        document.getElementById("dica").style.display = "none"
    }
    console.log(palavraSecreta)
}
