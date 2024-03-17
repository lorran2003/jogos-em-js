// vetor com as cartas
const arrayCartas = [
    
    {
        id: 0,
        img: `../images/beth.png`
    },

    {
        id: 1,
        img: `../images/bg.jpg`
    },
    {
        id: 2,
        img: `../images/brain.png`
    },
    {
        id: 3,
        img: `../images/cerebro.jpg`
    },
    {
        id: 4,
        img: `../images/jerry.png`
    },
    {
        id: 5,
        img: `../images/jessica.png`
    },
    {
        id: 6,
        img: `../images/back.png` 
        
    },
    {
        id: 7,
        img: `../images/meeseeks.png`
       
    },
    {
        id: 8,
        img: `../images/morty.png` 
       
    },
    {
        id: 9,
        img: `../images/pessoa-passaro.png` 
       
    },
    {
        id: 10,
        img: `../images/pickle-rick.png`
       
    },
    {
        id: 11,
        img: `../images/rick.png`
       
    },
    {
        id: 12,
        img: `../images/scroopy.png`
       
    },
    {
        id: 13,
        img: `../images/summer.png`
       
    },
    {
        id: 14,
        img: `../images/rick-and-morty.gif`
       
    }
]

//variavel que recebe a imagem aqual é a capa
const backCard = "../images/logo.png";

// array para verificar se todas as cartas vai ser acionadas
let arrayAleatorio = [
];

//Gerando números aleatorios para armazenar no vetor
while(arrayAleatorio.length < 15){

    var valorAleatorio = Math.floor( Math.random() * 15);

    
    if (!arrayAleatorio.includes(valorAleatorio)) {
        
        arrayAleatorio.push(valorAleatorio);
        
    };
    
}

console.log(arrayAleatorio);
console.log(arrayCartas);

let id = 0;

//Criando a primeira linha de cartas
for(let index = 0; index < 10; index++){

    document.getElementById("linha1").innerHTML += ` 
    <div class = "innerCard resetar" onclick="verificarCarta(${id})">
        <div class = "frontFace">
        <img src = "${backCard}" alt="">
        </div>
        <div class="backFace" id="img${id}">
        <img src="${arrayCartas[arrayAleatorio[index]].img}" alt="" id="carta${id}">
        </div>
    </div>    
    `;
    

    console.log(arrayAleatorio[index]);
    console.log(arrayCartas[arrayAleatorio[index]]);
    console.log(arrayCartas[arrayAleatorio[index]].img);

    id++;

}

//criando as primeiras 5 cartas da segunda linha de cartas
for (let index = 10; index < 15; index++){

    document.getElementById("linha2").innerHTML += ` 
    <div class = "innerCard resetar" onclick="verificarCarta(${id})">
        <div class = "frontFace">
        <img src = "${backCard}" alt="">
        </div>
        <div class="backFace" id="img${id}">
        <img src="${arrayCartas[arrayAleatorio[index]].img}" alt="" id="carta${id}">
        </div>
    </div>    
    `;

    id++;

}

//resetando o array que vai posicionar as cartas aleatoriamente

arrayAleatorio = [];

//Gerando números aleatorios para armazenar no vetor
while(arrayAleatorio.length < 15){

    var valorAleatorio = Math.floor( Math.random() * 15);

    
    if (!arrayAleatorio.includes(valorAleatorio)) {
        
        arrayAleatorio.push(valorAleatorio);
        
    }
    
}

//restante de cartas da segunda linha
for(let index = 0; index < 5; index++){

    document.getElementById("linha2").innerHTML += ` 
    <div class = "innerCard resetar" onclick="verificarCarta(${id})">
        <div class = "frontFace">
        <img src = "${backCard}" alt="">
        </div>
        <div class="backFace" id="img${id}">
        <img src="${arrayCartas[arrayAleatorio[index]].img}" alt="" id="carta${id}">
        </div>
    </div>    
    `;

    id++;
}

//criando a terceira linha de cartas
for(let index = 5; index < 15; index++){

    document.getElementById("linha3").innerHTML += ` 
    <div class = "innerCard resetar" onclick="verificarCarta(${id})">
        <div class = "frontFace">
        <img src = "${backCard}" alt="">
        </div>
        <div class="backFace" id="img${id}">
        <img src="${arrayCartas[arrayAleatorio[index]].img}" alt="" id="carta${id}">
        </div>
    </div>    
    `;

    id++;
}

console.log(id);