var order =[];
var clickedOrder =[];
var scrore=0;

/**0 = verde
 * 1 = Vermelho
 * 2 = amarelo
 * 3 = azul
 */
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

var shuffleOrder = ()=> {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length]=colorOrder;
    clickedOrder=[];

    for (let i  in order){
        let elementColor=createColorElement(order[i]);
        lightColor(elementColor, Number(i+1));
    }
}

let lightColor=(element, number)=>{
    number = number*500;
    setTimeout(()=>{ 
        element.classList.add('selected');
        
    },number-450);
    setTimeout(() =>{ 
        element.classList.remove('selected');
    })
}
let checkOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação ${score}\nVocê acertou!\nIniciando próximo nível!`);
        nextLevel();
    }
}
//função de clique:
let click = (color)=>{
    clickedOrder[clickedOrder.length]=color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//função que retorna as cores

let createColorElement= (color)=>{
    if (color==0){
        return green;
    }else if (color ==1){
        return red;
    }else if(color==2){
        return yellow;
    } else if (color ==3){
        return blue;
    }
}

let nextLevel=()=>{
    score++;
    shuffleOrder();
}

let gameOver=()=>{
    alert(`Pontuação: ${score}\nVocê perdeu!\nClique em OK pra reiniciar um novo jogo`);
    order=[];
    clickedOrder=[];

    playGame();
}

let playGame=()=>{
    alert(`Bem vindo ao GENIUS!\nIniciando novo jogo!`);
    score=0;
    nextLevel();
}
green.onclick=()=>click(0);
red.onclick=()=>click(1);
yellow.onclick=()=>click(2);
blue.onclick=()=>click(3);
playGame();